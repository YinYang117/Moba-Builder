'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    static associate(models) {
      // define association here
    }
  }
  Hero.init({
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    resourceName: DataTypes.STRING,
    resourceAmount: DataTypes.INTEGER,
    hitPoints: DataTypes.INTEGER,
    physicalArmor: DataTypes.INTEGER,
    magicalResistance: DataTypes.INTEGER,
    moveSpeed: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Hero',
  });
  return Hero;
};