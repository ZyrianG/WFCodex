const WarframeStats = require('../models').WarframeStats;
const Warframes = require ('../models').Warframes;

const create = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, stat, statInfo, warframe, warframeId;

    warframeId = req.params.warframeId;
    statInfo = req.body;

    [err, stat] = await to(WarframeStats.create(statInfo));
    if (err) return ReE(res, err, 422);

    [err, warframe] = await to(Warframes.findOne({
        where: {
            id: warframeId
        }
    })
    .then(stat => {
        Object.assign(
            {},
            {
                warframeId: stat.id
            });
    }));
    // Need to relate this stat to a warframe record
    [err, stat] = await to(stat.save(statInfo));
    if (err) return ReE(res, err, 422);

    return ReS(res, {stat}, 201);
}
module.exports.create = create;