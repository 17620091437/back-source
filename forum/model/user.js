const Sequelize = require('sequelize');
module.exports = {
  tableName: 'user',
  tableStruct: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    account: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
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
        len: [5, 16]
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
      validate: {
        isIn: [0, 1, 2]  // 0保密  1男  2女
      }
    },
    // 粉丝数
    follow: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    }
  }
}