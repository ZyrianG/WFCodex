const app = require('../app');

const port = CONFIG.port || 3000;

app.get('/test', (req, res) => {res.send("Testing 123")});
app.get('/testing', (req, res) => {res.send("Message for testing!")});

app.set('port', port);
app.listen(port);