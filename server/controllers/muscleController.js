'use strict'; // remember to add this to all later

const Muscle = require('../models'); // imports from the index.js in models folder

async function getAllMuscles(req, res) {
  try {
    const muscles = await Muscle.find ({});
    res.status(200);
    res.json(muscles);
  }
  catch(err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = getAllMuscles;