module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(12),
                allowNull: false,
            },
            avator: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            account: {
                type: DataTypes.STRING(16),
                allowNull: false,
            },
            password: {
                type: DataTypes.CHAR(32),
                allowNull: false,
            },
            power_level: {
                type: DataTypes.INTEGER(1),
                allowNull: false,
                defaultValue: 0,
                comment: '管理权限等级，默认为0'
            }
        },
        {
            tableName: 'user',
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