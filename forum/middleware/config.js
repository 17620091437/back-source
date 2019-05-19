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
  ctx.invalid = (message = 'unauthorized') => {
    ctx.status = 401;
    ctx.body = {
      code: 401,
      message
    }
  }
  ctx.notFound = (message = 'not found') => {
    ctx.status = 404;
    ctx.body = {
      code: 404,
      message
    }
  }
  ctx.forbidden = (message = 'forbidden') => {
    ctx.status = 403;
    ctx.body = {
      code: 403,
      message
    }
  }
  await next();
}