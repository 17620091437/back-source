const Sequelize = require('sequelize');
module.exports = {
  tableName: 'user',
  showAttributes: ['id', 'account', 'name', 'follow', 'sex', 'fans', 'avator'],
  tableStruct: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    avator: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558245295931&di=ceea4921ea49690b874516859cb3efe6&imgtype=0&src=http%3A%2F%2Fimage.yy.com%2Fyywebalbumbs2bucket%2F2d0d66e18b9f495e9f9db25dcb687935_1435932432985.jpg'
    },
    account: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [5, 16]
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    name: {
      type: Sequelize.STRING(32),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 12]
      }
    },
    sex: {
      type: Sequelize.INTEGER(1),
      defaultValue: 0,
      allowNull: false,
    },
    // 关注数
    follow: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    // 粉丝数
    fans: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  }
}