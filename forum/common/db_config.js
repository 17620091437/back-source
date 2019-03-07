/*
 *  数据库各个环境配置
 *
 */

module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'forum',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '123',
    database: 'forum',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: '',
    database: 'forum',
    host: '39.108.1.35',
    port: 3306,
    dialect: 'mysql',
  },
};
