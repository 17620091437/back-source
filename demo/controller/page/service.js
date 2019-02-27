module.exports = {
  error: async (ctx, next) => {
    ctx.status = 500;
    ctx.body = '500 错误页面！';
  },
  forbidden: async (ctx, next) => {
    ctx.status = 403;
    ctx.body = '403 Forbidden';
  },
  notFound: async (ctx, next) => {
    ctx.status = 404;
    ctx.body = '404 NOT FOUND';
  }
}