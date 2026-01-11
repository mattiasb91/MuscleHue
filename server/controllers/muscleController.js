'use strict'; // remember to add this to all later

const { Muscle } = require('../models'); // imports from the index.js in models folder

async function getAllMuscles(req, res) {
  try {
    const muscles = await Muscle.find ({});
    return res.status(200).json(muscles);
  }
  catch(err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to fetch muscles' });
  }
};

module.exports = getAllMuscles;