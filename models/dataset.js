'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Dataset extends Model {

        static associate(models) {
            this.belongsTo(models.Category, {
                foreignKey: "category",
            });
            this.belongsToMany(models.Datamodel, { through: 'Dataset_Datamodels' });
        }
    }
    Dataset.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Dataset',
    });
    return Dataset;
};