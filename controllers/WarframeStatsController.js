const WarframeStats = require('../models').WarframeStats;

const create = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, stat, statInfo, warframe, warframeId;

    warframeId = req.params.warframeId;
    statInfo = req.body;
    statInfo.warframeId = warframeId;

    [err, stat] = await to(WarframeStats.create(statInfo));
    if (err) return ReE(res, err, 422);

    // [err, warframe] = await to(Warframes.findOne({
    //     where: {
    //         id: warframeId
    //     }
    // }));

    [err, stat] = await to(stat.save(statInfo));
    if (err) return ReE(res, err, 422);

    return ReS(res, stat, 201);
}
module.exports.create = create;