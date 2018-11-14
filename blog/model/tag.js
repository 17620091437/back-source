module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'tag',
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
      content: {
        type: DataTypes.STRING(10),
        allowNull: false,
      }
    },
    {
      tableName: 'tag',
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