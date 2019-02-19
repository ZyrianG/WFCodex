const Warframes = require('../models').Warframes;

const getAll = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warframes;
    
    var whereStatement = {};
    if (req.query.name)
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };
}