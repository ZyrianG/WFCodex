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
Warframes.associate = function(models) {
  models.Warframes.belongsTo(models.WarframeStats, {foreignKey: 'warframeid', targetKey: 'id'});
  models.Warframes.belongsTo(models.WarframeDetails, {foreignKey: 'warframeid', targetKey: 'id'});  
}

Warframes.prototype.toWeb = function () {
  let json = this.toJSON();
  return json;
};

  return Warframes;
};