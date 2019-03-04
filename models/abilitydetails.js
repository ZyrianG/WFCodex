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
    slot: {
      type: DataTypes.INTEGER,
      validate: { min: 0, max: 6 }
    }
  }, {});

  AbilityDetails.associate = function(models) {  
    models.AbilityDetails.belongsToMany(models.Warframes, {through: 'WarframeAbility', foreignKey: 'abilityid'});
  };

  AbilityDetails.prototype.toWeb = function () {
    let json = this.toJSON();
    return json;
  };

  return AbilityDetails;
};