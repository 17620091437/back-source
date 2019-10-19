/*
 *  数据库各个环境配置
 *
 */

module.exports = {
  development: {
    username: 'root',
    password: 'CrazyBall',
    database: 'service_test',
    host: '106.15.73.155',
    port: 3306,
    dialect: 'mysql',
  },
  test: {
    username: '',
    password: '',
    database: '',
    host: '',
    port: 3306,
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'CrazyBall',
    database: 'service',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
};
