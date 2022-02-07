'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Datamodel extends Model {
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: "user",
            });
            this.belongsTo(models.Category, {
                foreignKey: "category",
            });
            this.belongsToMany(models.Dataset, { through: 'Dataset_Datamodels' });
        }
    }
    Datamodel.init({
        enable: DataTypes.BOOLEAN,
        public: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        url: DataTypes.STRING,
        requireProxy: DataTypes.BOOLEAN,
        body: DataTypes.JSON,
        tag: DataTypes.JSON
    }, {
        sequelize,
        modelName: 'Datamodel',
    });
    return Datamodel;
};