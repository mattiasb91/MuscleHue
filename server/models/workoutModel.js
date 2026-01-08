const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  musclesAffected: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Muscle',
    required: true,
  }],
});

module.exports = mongoose.model('Workout', workoutSchema);