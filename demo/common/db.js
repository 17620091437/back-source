const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const dbConfig = require('./db_config');
const NODE_ENV = process.env.NODE_ENV || 'development';

const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col,
};

const sequelize = new Sequelize(dbConfig[NODE_ENV].database, dbConfig[NODE_ENV].username, dbConfig[NODE_ENV].password, {
  define: {
    collate: 'utf8_general_ci',
  },
  host: dbConfig[NODE_ENV].host,
  dialect: dbConfig[NODE_ENV].dialect,
  port: dbConfig[NODE_ENV].port,
  operatorsAliases: operatorsAliases,
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
    console.log('Connect mysql database successfully!'.green.bold);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err.message);
    process.exit()
  });

module.exports = sequelize;