'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SourceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SourceType.init({
    enable: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    params: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'SourceType',
  });
  return SourceType;
};