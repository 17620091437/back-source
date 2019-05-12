const Sequelize = require("sequelize");
module.exports = {
  // 关注关系
  tableName: "follow_relation",
  tableStruct: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fans_user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: 'relation_key'
    },
    follow_user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: 'relation_key'
    }
  }
};
