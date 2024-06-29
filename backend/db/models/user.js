'use strict';
const {Model, Validator} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      /*
      User.hasMany(models.SingularModelName), {
        foreignKey: "probably userId, ownerId, etc"
      }
      */
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [2,50],
        isNotEmail(val) {
          if (Validator.isEmail(val)) throw new Error("Username cannot be an email")
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [3, 255],
        isEmail: true
      }
    },
    hashedPass: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',

    defaultScope: {
      attributes: {
        exclude: ["hashedPassword", "createdAt", "updatedAt"]
      }
    }
    
  });
  return User;
};