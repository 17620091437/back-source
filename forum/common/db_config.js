/*
 *  数据库各个环境配置
 *
 */

module.exports = {
  development: {
    username: 'root',
    password: 'CrazyBall',
    database: 'forum_test',
    host: '106.15.73.155',
    port: 3306,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '123',
    database: 'forum',
    host: '39.108.174.110',
    port: 3306,
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: '',
    database: 'forum',
    host: '39.108.174.110',
    port: 3306,
    dialect: 'mysql',
  },
};
