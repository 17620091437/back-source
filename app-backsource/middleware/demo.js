/*
 * 中间件demo文件,是一个函数
 */
module.exports = function(req, res, next) {
  let date = new Date();
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let min =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let sec =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  console.log(
    `--> ${req.method} : ${year}/${month}/${day} ${hour}:${min}:${sec}  path: ${
      req.originalUrl
    }    from:${req.ip}`
  );
  req.time = date.getTime();
  next();
};
