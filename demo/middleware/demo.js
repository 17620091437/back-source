/*
 * 中间件demo文件,是一个函数
 */
module.exports = async (ctx, next) => {
  console.log('I am demo1');
  next();
}