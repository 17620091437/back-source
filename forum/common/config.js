/*
 *  全局设置
 *  可访问全局变量GB_CONFIG获取
 */

const config = {
  APP_NAME: "FORUM APP",
  PORT: "8001", // 服务器监听端口
  API_VERSION: 'v1',
  BASE_URL: `/api/${this.API_VERSION}`,
  JWT_SECRET: 'secret', // jwt密钥
  JWT_PATH: {
    // 页面需要验证路径
    pagePath: [
    ],
    // api不需要检测路径
    apiPath: [
      /^\/demo/,
      /^\/login/
    ]
  }
};

global.GB_CONFIG = config;
module.exports = config;
