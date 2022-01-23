'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Administrator extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Role, {
                foreignKey: "role",
                allowNull: false,
            });
        }
    }
    Administrator.init({
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Administrator',
    });
    return Administrator;
};