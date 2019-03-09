const jwt = require('jwt-simple');
module.exports = async (ctx, next) => {
  let token = (ctx.request.body && ctx.request.body.access_token) || (ctx.query && ctx.query.access_token) || ctx.header.access_token || ctx.cookies.get('access_token');
  // 是否过滤
  let isAllow = false;
  // api
  if (/^\/api/.test(ctx.originalUrl)) {
    isAllow = GB_CONFIG.JWT_PATH.apiPath.some(item => {
      // 去除前缀
      let reg = new RegExp(`^/api/${GB_CONFIG.API_VERSION}`);
      let url = ctx.originalUrl.replace(reg, '');

      if (item.method && item.path && (item.path instanceof RegExp)) {
        // 如果指定方法
        return (item.method.toUpperCase() === ctx.method.toUpperCase()) && item.path.test(url)
      } else {
        // 没有指定方法，所有都行
        return (item instanceof RegExp) && item.test(url);
      }
    });
  } else {
    // 页面
    isAllow = !GB_CONFIG.JWT_PATH.pagePath.some(item => {
      return item.test(ctx.originalUrl);
    })
  }

  if (isAllow) {
    await next();
  } else {
    try {
      // 校验token
      let payload = jwt.decode(token, GB_CONFIG.JWT_SECRET);
      // 是否过期
      if (payload.expires < Date.now()) throw new Error();
      ctx.state.payload = payload;
    } catch (err) {
      ctx.status = 401;
      // 401页面跳转
      if (!/^\/api/.test(ctx.originalUrl)) {
        ctx.redirect('/forbidden');
        return;
      }
      // 接口返回
      ctx.body = {
        status: 401,
        message: 'Token Invalid'
      }
      return;
    }
    await next();
  }
}