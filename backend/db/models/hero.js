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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 50] }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1, 1000]
    },
    resourceName: {
      type: DataTypes.ENUM("Energy", "Mana", "Rage", "Focus"),
      allowNull: true
    },
    resourceAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hitPoints: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    physicalArmor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    magicalResistance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    moveSpeed: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Hero',
  });
  return Hero;
};