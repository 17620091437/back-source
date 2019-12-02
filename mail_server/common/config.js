/*
 *  全局设置
 *  可访问全局变量GB_CONFIG获取
 */

const config = {
  APP_NAME: "Mail APP",
  PORT: "7001", // 服务器监听端口
  API_VERSION: 'v1',
  JWT_SECRET: 'secret', // jwt密钥
  JWT_PATH: {
    // 页面需要验证路径
    pagePath: [],
    // api不需要检测路径
    apiPath: []
  },
  //邮件设置
  MAIL_USER: "17620091437@163.com",
  MAIL_PASS: "6401948qq",
  Send_Mail_Interval: 3000,
  AUTH_KEY: "BALLCRAZY",
  //upload
  UPLOAD_PATH:"/Users/nero/Desktop/upload",
};

global.GB_CONFIG = config;
module.exports = config;
