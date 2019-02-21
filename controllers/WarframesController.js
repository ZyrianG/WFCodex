const Warframes = require('../models').Warframes;

const getAll = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warframes;
    
    var whereStatement = {};
    if (req.query.name)
        whereStatement.name = {
            $like: `%${ req.query.name }%`
        };

    [err, warframes] = await to(Warframes.findAll({where: whereStatement}));

    return res.json(warframes);
}
module.exports.getAll = getAll;

const get = (req, res) => {
    res.setHeader('Content Type', 'application/json');
    let err, warframe;

}
module.exports.get = get;