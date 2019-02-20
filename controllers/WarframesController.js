const Warframes = require('../models').Warframes;

const getAll = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warframes;
    
    var whereStatement = {};
    if (req.query.name)
        whereStatement.name = {
            $like: '%' + req.query.name + '%'
        };

    [err, warframes] = await to(Warframes.findAll());

    let warframesJson = [];
    for (let i in warframes ) {
        let warframes = warframes[i];
    }
}

const get = (req, res) => {
    res.setHeader('Content Type', 'application/json');
    let warframes = req.warframes;

    return ReS(res, {warframes:warframes.toWeb()});
}
module.exports.get = get;