const Warframes = require('../models').Warframes;

const getAll = async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, warframes;
    
    var whereStatement = {};
    if (req.query.name)
        whereStatement.name = {
            $like: `%${ req.query.name }%`
        };

    [err, warframes] = await to(Warframes.findAll({where: whereStatement}));
    console.log(warframe);
    if(!warframes) return ReE(res, err, 404);

    return res.json(warframes);
}
module.exports.getAll = getAll;

const get = async function(req, res) {
    res.setHeader('Content Type', 'application/json');
    let err, warframe;
    let warframeId = req.params.warframeId;
    
    [err, warframe] = await to(Warframes.findByPk({warframeId}));
    if (err) return ReE(res, err, 500);
    if (!warframeId) return ReE(res, undefined, 404);

    return res.json(warframe);
}
module.exports.get = get;