const config = {
  APP_NAME: "DEMO APP",
  PORT: "8080", // 服务器监听端口
  BASE_URL: "/api/v1",
  JWT_SECRET: 'secret'
};

global.GB_CONFIG = config;
module.exports = config;
