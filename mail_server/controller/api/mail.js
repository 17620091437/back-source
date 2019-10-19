const mailService = require("../../service/mail")
module.exports = {
  sendMail: async (ctx, next) => {
    let to = ctx.request.body.to;
    let subject = ctx.request.body.subject;
    let content = ctx.request.body.content || "";
    let authKey = ctx.request.body.authKey;
    if (authKey !== GB_CONFIG.AUTH_KEY) {
      ctx.body = {
        status: 500,
        message: 'key错误',
      }
      return
    }
    if (!to) {
      ctx.body = {
        status: 500,
        message: '缺少发送者',
      }
      return
    }
    if (!subject) {
      ctx.body = {
        status: 500,
        message: '缺少发送主题',
      }
      return
    }
    mailService.addMailTask(to, subject, content)
    ctx.body = {
      status: 200,
      message: 'success',
    }
  },
}