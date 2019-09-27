const WarframeStats = require('../models').WarframeStats;

const getAll = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let err, stats;

  let whereStatement = {};
    if (req.query.name)
        whereStatement.name = {
            $like: `%${ req.query.name }%`
        };

    [err, stats] = await to(WarframeStats.findAll({
        where: whereStatement
    }));
    
    if(!stats) return ReE(res, undefined, 404);
    
    return ReS(res, stats, 200);
};
module.exports.getAll = getAll;

const get = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let err, stat, warframeId;

  warframeId = req.params.warframeId;

  [err, stat] = await to(WarframeStats.find({
    where: { 
        warframeid : warframeId 
    }
  }));
  if (err) return ReE(res, err, 500);
  if (!warframeId) return ReE(res, undefined, 404);

return ReS(res, stat, 200);
};
module.exports.get = get;

const create = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, stat, statInfo, warframeId;

    warframeId = req.params.warframeId;
    statInfo = req.body;
    statInfo.warframeid = warframeId;

    [err, stat] = await to(WarframeStats.create(statInfo));
    if (err) return ReE(res, err, 422);

    // [err, stat] = await to(stat.save(statInfo));
    // if (err) return ReE(res, err, 422);

    return ReS(res, stat, 201);
};
module.exports.create = create;

const update = async (req, res) => {
    let err, stat, statInfo, warframeId;
    warframeId = req.params.warframeId;
    statInfo = req.body;
    statInfo.warframeid = this.warframeId;

    [err, stat] = await to(WarframeStats.update(statInfo, {
        where: {
          warframeid: warframeId
        }
      }));
    
      if (err) return ReE(res, err, 422);
    
      return ReS(res, stat, 201);
};
module.exports.update = update;