'use strict';

const { Muscle, Workout, LoggedWorkout } = require('../models'); // import all models from the index.js in the modelfolder

async function getAllWorkouts(req, res) {

  try {
    const workouts = await Workout.find({});
    return res.status(200).json(workouts);

  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to fetch the workouts" });
  }
};


async function logWorkout(req, res) {

  try {
    // add a loggedWorkout to the logworkout-model:
    const { workoutId } = req.body;
    if (!workoutId) {
      return res.status(400).json({ message: "workoutId is required" });
    };

    const workout = await Workout.findById(workoutId);
    if (!workout) {
      return res.status(404).json({ message: "workout not found" });
    };

    // create new loggedworkout document using id, time gets default.
    const log = await LoggedWorkout.create({ workout: workoutId });

    // update all affected muscles timer
    await Muscle.updateMany(
      { _id: { $in: workout.musclesAffected } },
      { workoutDate: log.performedAt }
    );

    // return response status
    return res.status(201).json({
      message: 'workout logged successfully',
      loggedWorkout: log
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "failed to log workout" });
  }
};

module.exports = { getAllWorkouts, logWorkout };