module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'comment',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      article_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      parent_comment_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: 1,
      },
      content: {
        type: DataTypes.STRING(100),
        allowNull: false,
      }
    },
    {
      tableName: 'comment',
      timestamps: true,
      paranoid: true,
      underscored: true,
      freezeTableName: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    }
  );
};