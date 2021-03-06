'use strict';
module.exports = (sequelize, DataTypes) => {
  var Warframes = sequelize.define('Warframes', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    prime: {
      type: DataTypes.INTEGER,
    },
  }, {});

  Warframes.associate = function(models) {  
    models.Warframes.belongsToMany(models.AbilityDetails, {through: 'WarframeAbility', foreignKey: 'warframeid'});
  };

  Warframes.associate = function(models) {
    models.Warframes.hasOne(models.WarframeStats, { foreignKey: 'warframeid', sourceKey: 'id' });
  };

  Warframes.prototype.toWeb = function () {
    let json = this.toJSON();
    return json;
  };

  return Warframes;
};