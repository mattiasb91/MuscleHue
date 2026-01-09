const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId; // put this variable here to make the schema itself easier to read, see line 12

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  musclesAffected: [{ // array means it affects multiple muscles
    type: ObjectId,   // type is object IDs. Each item in this array is an ObjectId pointing to another document.
    ref: 'Muscle',    // This objectid refers to a document in the Muscle collection
    required: true,
  }],
});

module.exports = mongoose.model('Workout', workoutSchema);