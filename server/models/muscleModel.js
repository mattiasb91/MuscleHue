const mongoose = require('mongoose');

const muscleSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true,},
  workoutDate: {
    type: Date,
    default: null,
  }
});

module.exports = mongoose.model('Muscle', muscleSchema);