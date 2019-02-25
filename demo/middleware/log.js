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
  console.log(
    `==>  ${ctx.method}  ${year}-${month}-${day} ${hour}:${min}:${sec}  path:${
      ctx.originalUrl
      }  ip:${ctx.ip}`.blue.bold
  );
  await next();
  let endTime = new Date().getTime();
  if (ctx.status == 500) {
    console.log(
      `<==  ${ctx.method}(${ctx.status})  path:${ctx.originalUrl}  ip:${
        ctx.ip
        }  time:${endTime - startDate.getTime()}ms`.red.bold
    );
  } else {
    console.log(
      `<==  ${ctx.method}(${ctx.status})  path:${ctx.originalUrl}  ip:${
        ctx.ip
        }  time:${endTime - startDate.getTime()}ms`.blue.bold
    );
  }
}