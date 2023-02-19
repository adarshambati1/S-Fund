const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Revenue: {
    type: Number,
    required: true,
  },
  Occupancy: {
    type: Number,
    required: true
  },
  Item: {
    type: String,
    required: true
  },
  Quantity_Demanded: {
    type: Number,
    required: true
  },
  Date_by: {
    type: Number,
    required: true
  },
}, { timestamps: true });

const Mats = mongoose.model('mat', hospitalSchema);
module.exports = Mats;