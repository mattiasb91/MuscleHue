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

// this is the most complicated controller. it should both ad a loggedworkout to the logworkout collection,
// and update affected muscles  workoutDate:

async function logWorkout(req, res) {
// TODO
};

module.exports = { getAllWorkouts, logWorkout };