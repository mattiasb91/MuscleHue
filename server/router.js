express = require('express');
const router = express.Router();
const {getAllMuscles, getAllWorkouts, logWorkout} = require ('./controllers/muscleController');


// show all muscles
router.get('/muscles', getAllMuscles);

// get all workouts

router.get('/workouts', getAllWorkouts);

// log a new workout, this will also update muscle time

router.post('/workouts/log', logWorkout);

module.exports = router;

