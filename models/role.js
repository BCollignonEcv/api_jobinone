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
            this.hasMany(models.User, {
                foreignKey: "role",
            });
        }
    }
    Role.init({
        name: DataTypes.STRING,
        disableDatamodel: DataTypes.BOOLEAN,
        createDatamodel: DataTypes.BOOLEAN,
        updateDatamodel: DataTypes.BOOLEAN,
        deleteDatamodel: DataTypes.BOOLEAN,
        disableDataset: DataTypes.BOOLEAN,
        createDataset: DataTypes.BOOLEAN,
        updateDataset: DataTypes.BOOLEAN,
        deleteDataset: DataTypes.BOOLEAN,
        createUser: DataTypes.BOOLEAN,
        updateUser: DataTypes.BOOLEAN,
        deleteUser: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Role',
    });
    return Role;
};