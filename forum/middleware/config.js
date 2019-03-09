/**
 * 配置中间件
 * 可对ctx进行拓展功能，方便后续使用
 */

module.exports = async (ctx, next) => {
  // 统一接口返回信息
  ctx.success = (code, data) => {
    ctx.status = 200;
    ctx.body = {
      code,
      message: 'success',
      data: data,
    }
  };
  ctx.error = (code, message, status = 200) => {
    ctx.status = status;
    ctx.body = {
      code,
      message
    }
  };
  ctx.invalid = (code = 401, message = 'unauthorized') => {
    ctx.status = code;
    ctx.body = {
      code,
      message
    }
  }
  await next();
}