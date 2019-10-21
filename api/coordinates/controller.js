const Coordinate = require('./model').model;

const list = (req, res, next) => {
    Coordinate.find({}).then(coordinates => {
        return res.status(200).json(coordinates).end();
    }).catch(next);
}

const create = (req, res, next) => {
    const body = req.body;
    const formValid = body.lat && body.lng;
    if(!formValid) return res.status(400).end();
    res.status(501).end();
}

module.exports = {
    list,
    create
}