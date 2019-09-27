# WFCodex

An attempt to recreate the Warframe Wiki.
Will include all info about Waframes, Weapons, Mods, etc.

## Bootstrap

### Working Dropdowns

Need the following to get navbar dropdowns working
```
npm install jquery --save
npm install popper.js --save
npm install bootstrap --save
```
For angular to recognize the bootstrap.css
```
Add the following in .angular-cli.json
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
        ],
"scripts": [
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/popper.js/dist/umd/popper.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
        ],
```

## Sequelize
Run the following commands to create db tables (migrations)
```
sequelize model:generate --name Warframes --attributes name:string,prime:integer
```

Adjust models to meet table requirements (such as unique, allowNull, etc.)
```
name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
```

Add model associations to attach foreign keys to primary keys, and vice versa
```
Warframes.associate = function(models) {  
    models.Warframes.belongsToMany(models.AbilityDetails, {through: 'WarframeAbility', foreignKey: 'warframeid'});
  };

Warframes.associate = function(models) {
    models.Warframes.hasOne(models.WarframeStats, { foreignKey: 'warframeid', sourceKey: 'id' });
  };
```

## Authentication
