'use strict';
module.exports = (sequelize, DataTypes) => {
  var AbilityDetails = sequelize.define('AbilityDetails', {
    name: {
      type: DataTypes.STRING,
    },
    info: {
      type: DataTypes.STRING,
    },
    augment: {
      type: DataTypes.INTEGER,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return AbilityDetails;
};