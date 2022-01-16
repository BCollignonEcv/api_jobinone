'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sources extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sources.init({
    baseUrl: DataTypes.STRING,
    location: DataTypes.STRING,
    search: DataTypes.STRING,
    titleTag: DataTypes.STRING,
    companyTag: DataTypes.STRING,
    urlTag: DataTypes.STRING,
    salaryTag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sources',
  });
  return Sources;
};