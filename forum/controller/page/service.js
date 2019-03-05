module.exports = {
  error: async (ctx, next) => {
    ctx.status = 500;
    await ctx.render('service/error', { err: '' });
  },
  forbidden: async (ctx, next) => {
    ctx.status = 403;
    await ctx.render('service/forbidden');
  },
  notFound: async (ctx, next) => {
    ctx.status = 404;
    await ctx.render('service/404');
  }
}