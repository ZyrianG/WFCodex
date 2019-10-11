const Users = require('../models').Users;

const create = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const body = req.body;

    if (!body.secretKey && !body.email) {
        return ReE (res, 'Please enter an email address to register', 422);
    } else if (!body.password) {
        return ReE (res, 'Please enter a password to register', 422);
    } else {
        let err, user;

        [err, user] = await to(Users.create(body));
        if(err) return ReE(res, err, 422);

        return ReS(res, {user}, 201);
    }
};
module.exports.create = create;

const createUser = async (userInfo) => {
    let err;

    if (validator.isEmail(userInfo.email)) {
        [err, user] = await to(Users.create(userInfo));
        if(err) TE('User already exists with that email');
        return user;
    } else {
        TE('Invalid email');
    }
};
module.exports.createUser = createUser;

const get = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, user, userId;
    userId = req.params.userId;

    [err, user] = await to(Users.findOne({
        where: {
            id: userId
        }
    }));

    if(err) return ReE(res, err, 500);
    if(!user) return ReE(res, undefined, 400);
    return ReS(res, user, 200);
};
module.exports.get = get;

const getAll = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let err, users;

    [err, users] = await to(Users.findAll());
    
    if (err) return ReE(res, err, 500);
    if(!users) ReE(res, undefined, 404);

    return ReS(res, users, 200);
};
module.exports.getAll = getAll;

const update = async (req, res) => {
    let err, user, data, userId;
    data = req.body;
    userId = req.params.userId;

    [err, user] = await to(Users.update(data, {
        where: {
            id: userId
        }
    }));

    if(err) ReE(res, err, 422);

    return ReS(res, user, 201);
};
module.exports.update = update;