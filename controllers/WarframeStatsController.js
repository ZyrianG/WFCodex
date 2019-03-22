const WarframeStats = require('../models').WarframeStats;
const Warframes = require ('../models').Warframes;

const create = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, statInfo, warframeId;

    warframeId = req.params.warframeId;
    statInfo = req.body;

    [err, stat] = await to(WarframeStats.create(statInfo));
}
module.exports.create = create;