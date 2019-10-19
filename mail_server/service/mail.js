/**
 * 邮件服务
 */
const logger = require('../common/logger')
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: 'smtp.163.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: GB_CONFIG.MAIL_USER, // generated ethereal user
    pass: GB_CONFIG.MAIL_PASS // generated ethereal password
  }
});

let mailTaskQueue = []; //任务队列
let timer = null; //定时器


module.exports = {
  addMailTask
}

function addMailTask(to, subject, content, retryCount = 1) {
  let taskObj = {};
  taskObj.to = to;
  taskObj.subject = subject;
  taskObj.content = content;
  taskObj.retryCount = retryCount;
  mailTaskQueue.push(taskObj);
  if (!timer) {
    logger.mailLoger.info(`[START][${mailTaskQueue.length}] | Email Queue Start...`);
    timer = setTimeout(sendMail, GB_CONFIG.Send_Mail_Interval);
  }
  logger.mailLoger.info(`[ADD][${mailTaskQueue.length}] | To:${taskObj.to},Subject:${taskObj.subject}`);
}

async function sendMail() {
  if (mailTaskQueue.length > 0) {
    let taskObj = mailTaskQueue.shift();
    let mailOptions = {
      from: `"【邮件系统】" <${GB_CONFIG.MAIL_USER}>`, // 发件人
      to: taskObj.to, // 收件人
      subject: taskObj.subject, // 主题
      html: taskObj.content, // html body
    };
    try {
      let mail = await Mail.create({
        to: taskObj.to,
        from: GB_CONFIG.MAIL_USER,
        subject: taskObj.subject,
        content: taskObj.content,
      })
      await transporter.sendMail(mailOptions);
      await mail.update({ status: true, sendTime: Date.now() });
      logger.mailLoger.info(`[SUCCESS][${mailTaskQueue.length}] | To:${taskObj.to},Subject:${taskObj.subject}`);
    } catch (err) {
      // 日志记录
      logger.mailLoger.error(`[ERROR][${mailTaskQueue.length}] | To:${taskObj.to},Subject:${taskObj.subject},Error:${err}`);
      // 重新发送
      if (taskObj.retryCount > 0) {
        addMailTask(taskObj.to, taskObj.subject, taskObj.content, --taskObj.retryCount);
      }
    }
    timer = setTimeout(sendMail, GB_CONFIG.Send_Mail_Interval);
  } else {
    clearTimeout(timer);
    timer = null;
    logger.mailLoger.info(`[END][${mailTaskQueue.length}] | Email Queue End.`);
  }
}