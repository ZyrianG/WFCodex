'use strict';
module.exports = (sequelize, DataTypes) => {
  var WarframeDetails = sequelize.define('WarframeDetails', {
    description: {
      type: DataTypes.STRING,
    },
    releasedate: {
      type: DataTypes.DATE,
    },
    versionrelease: {
      type: DataTypes.STRING,
    },
    warframeid: {
      type: DataTypes.INT,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return WarframeDetails;
};