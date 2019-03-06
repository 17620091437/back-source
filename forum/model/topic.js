const Sequelize = require("sequelize");
module.exports = {
  // 论坛主题模块
  tableName: "topic",
  tableStruct: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  }
};
