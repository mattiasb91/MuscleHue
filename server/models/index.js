const mongoose = require('mongoose');

const Muscle = require('./muscleModel');
const Workout = require('./workoutModel');
const LoggedWorkout = require('./logWorkoutModel')


async function connectDB() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/musclehue-DB');
    console.log('MongoDB connected!');

  } catch(err) {
    console.error('MongoDB connection error ', err);
    process.exit(1); //this means: the app failed to start, shut it down. stop the broken server
  }
}

module.exports = {
  connectDB,
  Muscle,
  Workout,
  LoggedWorkout
};