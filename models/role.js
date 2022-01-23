'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Administrator, {
                foreignKey: "role",
            });
        }
    }
    Role.init({
        name: DataTypes.STRING,
        disableSource: DataTypes.BOOLEAN,
        createSource: DataTypes.BOOLEAN,
        updateSource: DataTypes.BOOLEAN,
        deleteSource: DataTypes.BOOLEAN,
        createUser: DataTypes.BOOLEAN,
        updateUser: DataTypes.BOOLEAN,
        deleteUser: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Role',
    });
    return Role;
};