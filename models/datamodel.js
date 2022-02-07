'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Datamodel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasOne(models.User, {
                foreignKey: "user",
            });
            this.belongsTo(models.Category, {
                foreignKey: "category",
            });
        }
    }
    Datamodel.init({
        enable: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        url: DataTypes.STRING,
        public: DataTypes.BOOLEAN,
        body: DataTypes.JSON,
        tag: DataTypes.JSON,
        requireProxy: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Datamodel',
    });
    return Datamodel;
};