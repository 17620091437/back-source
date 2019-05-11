const Sequelize = require("sequelize");
module.exports = {
  tableName: "comment",
  tableStruct: {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    post_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    like_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
  }
};
