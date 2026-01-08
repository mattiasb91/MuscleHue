const mongoose = require('mongoose');

const loggedWorkoutSchema = new mongoose.Schema({
  workout: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Workout',
    required: true,
  },
  performedAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('LoggedWorkout', loggedWorkoutSchema);