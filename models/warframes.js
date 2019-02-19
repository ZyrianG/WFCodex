'use strict';
module.exports = (sequelize, DataTypes) => {
  var Warframes = sequelize.define('Warframes', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    prime: DataTypes.INTEGER,
    umbra: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Warframes;
};