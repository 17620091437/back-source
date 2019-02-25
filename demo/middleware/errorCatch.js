/**
 * 错误处理中间件
 */

module.exports = async (req, res, next) => {
  try {
    console.log(111);
    await next();
  } catch (err) {
    if (/api/.test(req.originalUrl)) {
      // api错误处理
      res.status(500).send({
        status: 500,
        msg: err.message
      })
    } else {
      // 页面错误处理
      res.redirect('/error');
    }
  }
}