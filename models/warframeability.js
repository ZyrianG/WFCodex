'use strict';
module.exports = (sequelize, DataTypes) => {
  var WarframeAbility = sequelize.define('WarframeAbility', {
    abilityid: {
      type: DataTypes.INTEGER,
    },
    warframeid: {
      type: DataTypes.INTEGER,
    },
    abilityslot: {
      type: DataTypes.INTEGER,
    },
  }, {});
  WarframeAbility.associate = function(models) {  
    models.WarframeAbility.belongsTo(models.Warframes, {foreignKey: 'warframeid', targetKey: 'id'});
    models.WarframeAbility.hasMany(models.AbilityDetails, )
  };

  WarframeAbility.prototype.toWeb = function () {
    let json = this.toJSON();
    return json;
  };
  return WarframeAbility;
};