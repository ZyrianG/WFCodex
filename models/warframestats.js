'use strict';
module.exports = (sequelize, DataTypes) => {
  var WarframeStats = sequelize.define('WarframeStats', {
    mastery: {
      type: DataTypes.INTEGER,
      validate: { min: 0, max: 30 },
    },
    health: {
      type: DataTypes.INTEGER,
    },
    shield: {
      type: DataTypes.INTEGER,
    },
    armor: {
      type: DataTypes.INTEGER,
    },
    energy: {
      type: DataTypes.INTEGER,
    },
    sprintspeed: {
      type: DataTypes.DECIMAL,
    },
    warframeid: {
      type: DataTypes.INTEGER,
    },
  }, {});

  WarframeStats.associate = function(models) {  
    models.WarframeStats.belongsTo(models.Warframes, {foreignKey: 'warframeid', targetKey: 'id'});
  };

  return WarframeStats;
};