'use strict';
module.exports = (sequelize, DataTypes) => {
  var WarframeAbility = sequelize.define('WarframeAbility', {
    passive: {
      type: DataTypes.INTEGER
    },
    ability1: {
      type: DataTypes.INTEGER,
    },
    ability2: {
      type: DataTypes.INTEGER,
    },
    ability3: {
      type: DataTypes.INTEGER,
    },
    ultimate: {
      type: DataTypes.INTEGER,
    },
    warframeid: {
      type: DataTypes.INTEGER,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return WarframeAbility;
};