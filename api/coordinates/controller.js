const Coordinate = require('./model').model;

const list = (req, res, next) => {
    Coordinate.find({}).then(coordinates => {
        return res.status(200).json(coordinates).end();
    }).catch(next);
}

const create = (req, res, next) => {
    const body = req.body;
    const formValid = body.lat && body.lng;
    if(!formValid)
        res.status(400).end();

    const coordinates = new Coordinate({
        lat: body.lat,
        lng: body.lng
    });
    coordinates.save((err, coordinates) => {
        if(err){
            res.status(400).json(err).end();
        }else{
            res.status(200).json(coordinates).end();
        }
    });
}

module.exports = {
    list,
    create
}