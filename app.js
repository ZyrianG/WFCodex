require('./global_functions');
require('./config/config');

const express = require('express');
const models = require('./models');
const bodyParser = require('body-parser');
const warframes = require('./controllers/WarframesController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 
      'X-Requested-With, content-type, Authorization, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });


models.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database.', err);
    });

if (CONFIG.app === 'dev') {
    models.sequelize.sync({
        force: true // drops all tables then recreates them
    });
}

app.get('/warframes/:warframeId', warframes.get);
app.get('/warframes', warframes.getAll);
app.post('/warframes', warframes.create);
app.put('/warframes', warframes.update);
app.delete('/warframes', warframes.remove);
app.get('/', (req, res) => {res.send("Hello There!")});

module.exports = app;