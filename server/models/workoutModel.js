const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  musclesAffected: [{ // array: affects multiple muscles
    type: ObjectId,   // type is object IDs. Each item in this array is an ObjectId pointing to another document.
    ref: 'Muscle',    // This objectid refers to a document in the Muscle collection
    required: true,
  }],
});

module.exports = mongoose.model('Workout', workoutSchema);