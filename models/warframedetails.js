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
      type: DataTypes.INTEGER,
    },
  }, {});

  WarframeDetails.associate = function(models) {  
    models.WarframeDetails.belongsTo(models.Warframes, {foreignKey: 'warframeid', targetKey: 'id'});
  };

  return WarframeDetails;
};