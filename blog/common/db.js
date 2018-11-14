const Sequelize = require('sequelize');
const dbConfig = require('./db_config');
const NODE_ENV = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(dbConfig[NODE_ENV].database, dbConfig[NODE_ENV].username, dbConfig[NODE_ENV].password, {
  define: {
    collate: 'utf8_general_ci',
  },
  host: dbConfig[NODE_ENV].host,
  dialect: dbConfig[NODE_ENV].dialect,
  port: dbConfig[NODE_ENV].port,
  operatorsAliases: false,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    dateStrings: true, // 禁止 mysql 的转换
    typeCast: true, // 覆盖了 sequelize 的转换，目前只影响 date 和 GEOMETRY
  },
  timezone: '+08:00',
});

// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Connect mysql database successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit()
  });

module.exports = sequelize;