const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;  // put this variable here to make the schema itself easier to read

const loggedWorkoutSchema = new mongoose.Schema({
  workout: {
    type: ObjectId, // type is object IDs. Each item in this array is an ObjectId pointing to another document.
    ref: 'Workout', // This objectid refers to a document in the Workout collection
    required: true,
  },
  performedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('LoggedWorkout', loggedWorkoutSchema);