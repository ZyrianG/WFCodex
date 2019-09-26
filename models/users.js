'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: { msg: 'Please enter valid email' },
        notNull: { msg: 'Email cannot be blank' },
      }
    },
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: 'Please enter a password' },
        min: 6,
      }
    } 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Users;
};