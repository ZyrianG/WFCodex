'use strict';
module.exports = (sequelize, DataTypes) => {
  var Warframes = sequelize.define('Warframes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prime: {
      type: DataTypes.INTEGER,
    },
  }, {});
  
  return Warframes;
};