module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        'article',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(256),
                allowNull: false,
            },
            summary: {
                type: DataTypes.STRING(512),
                allowNull: false,
            },
            content: {
                type: DataTypes.TEXT('long'),
                allowNull: false,
            },
            like: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: 0,
            },
            read: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                defaultValue: 0,
            },
            cover: {
                type: DataTypes.TEXT('long'),
                allowNull: true,
            }
        },
        {
            tableName: 'article',
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