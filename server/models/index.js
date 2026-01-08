const mongoose = require('mongoose');

require('./muscleModel');
require('./workoutModel');
require('./logWorkoutModel')


async function connectDB() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/musclehue-DB');
    console.log('MongoDB connected!');

  } catch(err) {
    console.error('MongoDB connection error ', err);
  }
}

module.exports = connectDB;