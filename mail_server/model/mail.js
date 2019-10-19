/**
 * 邮件表
 */

const Sequelize = require('sequelize');
module.exports = {
  tableName: 'mail',
  tableStruct: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    from: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    to: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    sendTime: {
      type: Sequelize.DATE,
      allowNull: true,
    }
  },
}