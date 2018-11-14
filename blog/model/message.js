module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'message',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(16),
        allowNull: false,
        defaultValue: '游客'
      },
      content: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(32),
        allowNull: true,
      }
    },
    {
      tableName: 'message',
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