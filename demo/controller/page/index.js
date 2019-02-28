module.exports = {
  index: async (ctx, next) => {
    await ctx.render('index.html', { aa: 123 });
  }
}