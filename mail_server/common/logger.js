const log4js = require('log4js');
const path = require('path');
log4js.configure({
  appenders: {
    'default': { type: 'console' },
    'mailLog': {
      type: "file",
      filename: process.env.NODE_ENV == "production" ? "/root/crazyball/static/log/mail/mail-log" : path.join(__dirname, '../log/mail/mail-log'),
      alwaysIncludePattern: true,
      pattern: "yyyy-MM-dd.log",
      encoding: 'utf-8',//default "utf-8"，文件的编码
      maxLogSize: 1024 * 1024 * 20,
    },
    'error': {
      type: "file",
      filename: process.env.NODE_ENV == "production" ? "/root/crazyball/static/log/mail/error-log" : path.join(__dirname, '../log/mail/error-log'),
      alwaysIncludePattern: true,
      pattern: "yyyy-MM-dd.log",
      encoding: 'utf-8',//default "utf-8"，文件的编码
      maxLogSize: 1024 * 1024 * 20,
      level: 'error'
    }
  },
  categories: {
    'mailLog': {
      appenders: ['mailLog', 'default'],
      level: 'all'
    },
    'errLog': {
      appenders: ['error', 'default'],
      level: 'all'
    },
    default: {
      appenders: ['default'],
      level: 'all'
    }
  }
})
module.exports = {
  mailLoger: log4js.getLogger('mailLog'),
  errLoger: log4js.getLogger('errLog'),
};