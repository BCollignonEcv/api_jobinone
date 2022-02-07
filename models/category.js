'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            this.hasMany(models.Datamodel, {
                foreignKey: "category",
            });
            this.hasMany(models.Dataset, {
                foreignKey: "category",
            });
        }
    }
    Category.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Category',
    });
    return Category;
};