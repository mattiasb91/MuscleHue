'use strict';

const { Muscle, Workout, LoggedWorkout } = require('../models'); // import all models from the index.js in the modelfolder

async function getAllWorkouts(req, res) {

  try {
    const workouts = await Workout.find({});
    res.status(200);
    res.json(workouts);
  }
  catch (err) {
    console.log(err);
    res.status(500);
  }
};


async function logWorkout(req, res) {

};

module.exports = { getAllWorkouts, logWorkout };