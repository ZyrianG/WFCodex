'use strict';
module.exports = (sequelize, DataTypes) => {
  var WarframeStats = sequelize.define('WarframeStats', {
    health: {
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
  return WarframeStats;
};