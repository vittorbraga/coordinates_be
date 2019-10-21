const mongoose = require('mongoose');

const coordinateSchema = new mongoose.Schema({
    lat: Number,
    lng: Number
  });

const model = mongoose.model('Coordinate', coordinateSchema);

module.exports = {
  schema: model.schema,
  model
}

