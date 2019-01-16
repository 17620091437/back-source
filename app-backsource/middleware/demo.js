/*
 * 中间件demo文件,是一个函数
 */
module.exports = function (req, res, next) {
  console.log('I am demo1');
  next();
}