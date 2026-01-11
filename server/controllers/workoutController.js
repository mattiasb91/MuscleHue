'use strict';

const { Muscle, Workout, LoggedWorkout } = require('../models'); // import all models from the index.js in the modelfolder

async function getAllWorkouts(req, res) {

  try {
    const workouts = await Workout.find({});
    return res.status(200).json(workouts);

  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to fetch the workouts!!" });
  }
};

// this is the most complicated controller. it should both add a loggedworkout to the logworkout collection,
// and update affected muscles workoutDate:

async function logWorkout(req, res) {

  try {
    //first. add a loggedWorkout to the logworkout-model:
    // - get logout id, check if it exists. never trust the client! --some guy
    const { workoutId } = req.body;
    if (!workoutId) {
      return res.status(400).json({ message: "workoutId is required, you silly goose!!!" });
    };

    const workout = await Workout.findById(workoutId);
    if (!workout) {
      return res.status(404).json({ message: "workout not found, dangit" });
    };

    // - create new loggedworkout document using id, time gets default. (.create)
    const log = await LoggedWorkout.create({ workout: workoutId });

    //second. update all affected muscles timer
    // get muscle-id:s and update. (.updateMany)

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