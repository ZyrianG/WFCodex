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
Add the following in .agular-cli.json
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
Run the following commands to create db tables
```
sequelize model:generate --name Warframes --attributes id:integer,name:string,prime:integer,umbra:integer
```