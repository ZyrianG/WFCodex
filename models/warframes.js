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
    models.Warframes.belongsToMany(models.AbilityDetails, {through: 'WarframeAbility', foreignKey: 'warframeid'});
  };

  Warframes.prototype.toWeb = function () {
    let json = this.toJSON();
    return json;
  };

  return Warframes;
};