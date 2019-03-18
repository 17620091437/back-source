const Sequelize = require("sequelize");
module.exports = {
  tableName: "post",
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
    topic_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
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
    collect_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  }
};
