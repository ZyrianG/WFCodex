const Warframes = require('../models').Warframes;
const WarframeStats = require('../models').WarframeStats;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warframes;
    
    let whereStatement = {};
    if (req.query.name)
        whereStatement.name = {
            $like: `%${ req.query.name }%`
        };

    [err, warframes] = await to(Warframes.findAll({
        where: whereStatement
    }));
    
    if (err) return ReE(res, err, 500);
    if(!warframes) return ReE(res, undefined, 404);
    
    return ReS(res, warframes, 200);
};
module.exports.getAll = getAll;

const get = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let warframeId = req.params.warframeId;
    let err, warframe;
    
    [err, warframe] = await to(Warframes.find({
        include: [{
            model: WarframeStats
        }],
        where: { 
            id : warframeId 
        }
    }));
    if (err) return ReE(res, err, 500);
    if (!warframeId) return ReE(res, undefined, 404);

    return ReS(res, warframe, 200);
};
module.exports.get = get;

const create = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warframe, data;

    data = req.body;

    // [err, warframe] = await to(isUnique(warframeInfo.Name));
    // if (err) return ReE(res, err, 422);

    [err, warframe] = await to(Warframes.create(data));
    if (err) return ReE(res, err, 422);

    [err, warframe] = await to(warframe.save());
    if (err) return ReE(res, err, 422);

    return ReS(res, {warframe}, 201);
};
module.exports.create = create;

const update = async (req, res) => {
  let err, warframe, data;
  data = req.body;

  [err, warframe] = await to(Warframes.update(data, {
    where: {
      id: data.id
    }
  }));

  if (err) return ReE(res, err, 422);

  return ReS(res, warframe, 201);
};
module.exports.update = update;

const remove = async (req, res) => {
    let err, warframe, data;
    warframe = req.warframe;
    data = req.data;

    [err, warframe] = await to(Warframes.destroy({
        where: {
            id: data.id
        }
    }));
    
    if (err) return ReE(res, {message: `Warframe does not exist.`}, 422);

    return ReS(res, {message: `Warframe successfully deleted.`}, 204);

};
module.exports.remove = remove;

const isUnique = async (name) => {
    let warframe;

    [err, warframe] = await to(findOne({
        where: {
            Name: name
        }
    }));
    if (warframe) {
        throw new error ('Warframe already exists!');
    }
};
module.exports.isUnique = isUnique;