/**
 * 错误处理中间件
 */
const logger = require("../common/logger")
module.exports = async (ctx, next) => {
  try {
    await next();
    // 处理404
    ctx.status == 404 && ctx.originalUrl != '/404' && ctx.redirect('/404');
  } catch (err) {
    console.log('======================================='.yellow.bold);
    console.log('************ ERROR MESSAGE ************'.red.bold);
    console.log(`${err.stack}`.red.bold);
    console.log('************ ERROR MESSAGE ************'.red.bold);
    console.log('======================================='.yellow.bold);
    logger.errLoger.error(err.stack)
    if (/api/.test(ctx.originalUrl)) {
      // api错误处理
      ctx.status = 500;
      ctx.body = {
        status: 500,
        msg: err.message
      }
    } else {
      // 页面错误处理
      // ctx.redirect('/error');
      ctx.status = 500;
      await ctx.render('service/error', { err: err.message });
    }
  }
}