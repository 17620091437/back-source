/*
 *  全局设置
 *  可访问全局变量GB_CONFIG获取
 */

const config = {
  APP_NAME: "FORUM APP",
  PORT: "8001", // 服务器监听端口
  API_VERSION: 'v1',
  BASE_URL: `/api/v1`,
  JWT_SECRET: 'secret', // jwt密钥
  JWT_PATH: {
    // 页面需要验证路径
    pagePath: [
    ],
    // api不需要检测路径
    apiPath: [
      /^\/demo/,
      { method: 'get', path: /^\/user\/[0-9]+$/ }, // 用户信息
      { method: 'post', path: /^\/login/ }, // 登录
      { method: 'post', path: /^\/user$/ }, // 注册
      { method: 'get', path: /^\/topic$/ },  // 话题列表
      { method: 'get', path: /^\/post$/ },  // 帖子列表
      { method: 'get', path: /^\/post\/[0-9]+$/ }, // 帖子详情
      { method: 'get', path: /^\/comment$/ },  // 评论列表
      { method: 'get', path: /^\/follow -list$/ }, // 关注列表
      { method: 'get', path: /^\/fans-list$/ },  // 粉丝列表
    ]
  }
};

global.GB_CONFIG = config;
module.exports = config;
