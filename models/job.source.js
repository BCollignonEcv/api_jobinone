'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class JobSource extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    JobSource.init({
        enable: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        baseUrl: DataTypes.STRING,
        pathUrl: DataTypes.STRING,
        locationParam: DataTypes.STRING,
        searchParam: DataTypes.STRING,
        container: DataTypes.STRING,
        titleTag: DataTypes.STRING,
        companyTag: DataTypes.STRING,
        urlTag: DataTypes.STRING,
        salaryTag: DataTypes.STRING,
        locationTag: DataTypes.STRING,
        dateTag: DataTypes.STRING,
        descriptionTag: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'JobSource',
    });
    return JobSource;
};