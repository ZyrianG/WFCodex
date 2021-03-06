require('./global_functions');
require('./config/config');

const express = require('express');
const models = require('./models');
const bodyParser = require('body-parser');
const warframes = require('./controllers/WarframesController');
const warframeStats = require('./controllers/WarframeStatsController');
const users = require('./controllers/UserController');
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use((req, res, next) => {
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
        console.log(`Connection has been established successfully on port ${CONFIG.port}`);
    })
    .catch(err => {
        console.log('Unable to connect to the database.', err);
    });

if (CONFIG.app === 'dev') {
    models.sequelize.sync({
        force: false // true drops all tables then recreates them
    });
}

app.use(router);

app.get         ('/warframes/:warframeId', warframes.get);
app.get         ('/warframes', warframes.getAll);
app.post        ('/warframes', warframes.create);
app.put         ('/warframes/:warframeId', warframes.update);
app.delete      ('/warframes', warframes.remove);

app.get         ('/stats/:warframeId', warframeStats.get);
app.get         ('/stats', warframeStats.getAll);
app.post        ('/stats', warframeStats.create);
app.put         ('/stats/:warframeId', warframeStats.update);

app.get         ('/users/:userId', users.get);
app.get         ('/users', users.getAll);
app.post        ('/users', users.create);
app.put         ('/users/:userId', users.update);

module.exports = app;