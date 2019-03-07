/*
 *  日志输出中间件
 */

module.exports = async (ctx, next) => {
  let startDate = new Date();
  let year = startDate.getFullYear();
  let month =
    startDate.getMonth() + 1 < 10
      ? "0" + (startDate.getMonth() + 1)
      : startDate.getMonth() + 1;
  let day = startDate.getDate() < 10 ? "0" + startDate.getDate() : startDate.getDate();
  let hour = startDate.getHours() < 10 ? "0" + startDate.getHours() : startDate.getHours();
  let min =
    startDate.getMinutes() < 10 ? "0" + startDate.getMinutes() : startDate.getMinutes();
  let sec =
    startDate.getSeconds() < 10 ? "0" + startDate.getSeconds() : startDate.getSeconds();
  console.log(ctx.header);
  console.log(
    `==>  ${ctx.method}  ${year}-${month}-${day} ${hour}:${min}:${sec}  path:${
      ctx.originalUrl
      }  ip:${ctx.ip}`.white.bold
  );
  await next();
  let endTime = new Date().getTime();
  let statusType = parseInt(parseInt(ctx.status) / 100);
  let str = `<==  ${ctx.method}(${ctx.status})  path:${ctx.originalUrl}  ip:${ctx.ip}  time:${endTime - startDate.getTime()}ms`
  if (statusType === 5) {
    console.log(str.red.bold
    );
  } else if (statusType === 4) {
    console.log(str.magenta.bold);
  } else if (statusType === 3) {
    console.log(str.cyan.bold);
  } else if (statusType === 2) {
    console.log(str.green.bold);
  }
}