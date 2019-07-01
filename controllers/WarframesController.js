const Warframes = require('../models').Warframes;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warframes;
    
    var whereStatement = {};
    if (req.query.name)
        whereStatement.name = {
            $like: `%${ req.query.name }%`
        };

    [err, warframes] = await to(Warframes.findAll({
        where: whereStatement
    }));
    
    if(!warframes) return ReE(res, undefined, 404);
    
    return res.json(warframes);
}
module.exports.getAll = getAll;

const get = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let warframeId = req.params.warframeId;
    let err, warframe;
    
    [err, warframe] = await to(Warframes.find({
        where: {
            id : warframeId
        }
    }));
    if (err) return ReE(res, err, 500);
    if (!warframeId) return ReE(res, undefined, 404);

    return res.json(warframe);
}
module.exports.get = get;

const create = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, warframe, warframeInfo;

    warframeInfo = req.body;

    // [err, session] = await to(isUnique(warframeInfo.Name));
    // if (err) return ReE(res, err, 422);

    [err, warframe] = await to(Warframes.create(warframeInfo));
    if (err) return ReE(res, err, 422);

    [err, session] = await to(warframe.save());
    if (err) return ReE(res, err, 422);

    return ReS(res, {warframe}, 201);
}
module.exports.create = create;

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
}
module.exports.isUnique = isUnique;

const update = async (res, req) => {
    let warframeId = req.params.warframeId;
    let err, warframe, data;
    data = req.body;
    
    
    [err, warframe] = await to(Warframes.update(data, {
        where: {
            id: warframeId
        }
    }));
    if (err) { 
        return ReE(res, err);
    }

    return ReS(res);
}
module.exports.update = update;

const remove = async (res, req) => {
    let warframeId = req.params.warframeId;
    let err, warframe;

    [err, warframe] = await to(Warframes.find({
        where : {
            id : warframeId
        }
    }));

    [err, warframe] = await to(warframe.destroy());
    if (err) return ReE(res, 'Error occured trying to delete the Warframe');

    return ReS(res, {
        message: 'Deleted Warframe'
    }, 204);

}
module.exports.remove = remove;