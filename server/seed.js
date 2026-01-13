'use strict';

// file to seed the database if its empty

const { Muscle, Workout } = require('./models');

async function seedDataBase() {
  console.log("seedin' database.....");

  const muscles = await Muscle.insertMany([
    { name: 'Deltoid_L' },
    { name: 'Deltoid_R' },
    { name: 'Chest' },
    { name: 'Biceps_R' },
    { name: 'Biceps_L' },
    { name: 'Side_Abs_L' },
    { name: 'Side_Abs_R' },
    { name: 'Abdominals' },
    { name: 'Quadriceps_L' },
    { name: 'Quadriceps_R' },
    { name: 'Upper_Back' },
    { name: 'Middle_Back' },
    { name: 'Lower_Back' },
    { name: 'Triceps_L' },
    { name: 'Triceps_R' },
    { name: 'Gluteus_Maximus' },
    { name: 'Hamstring_L' },
    { name: 'Hamstring_R' },
    { name: 'Calf_L' },
    { name: 'Calf_R' },
  ]);

  function findId(muscleName) {
    const muscle = muscles.find(m => m.name === muscleName);
    if (!muscle) {
      throw new Error(`Muscle not found: ${muscleName}`);
    }
    return muscle._id;
  }

  await Workout.insertMany([
    {
      name: 'Bench Press',
      musclesAffected: [
        findId('Chest'),
        findId('Triceps_L'),
        findId('Triceps_R'),
        findId('Deltoid_L'),
        findId('Deltoid_R'),
      ]
    },
    {
      name: 'Bicep Curl',
      musclesAffected: [
        findId('Biceps_L'),
        findId('Biceps_R')
      ]
    },
    {
      name: 'Pull-Up',
      musclesAffected: [
        findId('Upper_Back'),
        findId('Middle_Back'),
        findId('Biceps_L'),
        findId('Biceps_R')
      ]
    },
    {
      name: 'Deadlift',
      musclesAffected: [
        findId('Lower_Back'),
        findId('Gluteus_Maximus'),
        findId('Hamstring_L'),
        findId('Hamstring_R')
      ]
    },
    {
      name: 'Squat',
      musclesAffected: [
        findId('Quadriceps_L'),
        findId('Quadriceps_R'),
        findId('Gluteus_Maximus'),
        findId('Hamstring_L'),
        findId('Hamstring_R')
      ]
    },
    {
      name: 'Calf Raise',
      musclesAffected: [
        findId('Calf_L'),
        findId('Calf_R')
      ]
    },
    {
      name: 'Shoulder Press',
      musclesAffected: [
        findId('Deltoid_L'),
        findId('Deltoid_R'),
        findId('Triceps_L'),
        findId('Triceps_R')
      ]
    },
    {
      name: 'Cable Crunches',
      musclesAffected: [
        findId('Abdominals')
      ]
    },
    {
      name: 'Triceps Extensions',
      musclesAffected: [
        findId('Triceps_L'),
        findId('Triceps_R')
      ]
    },
    {
      name: 'Seated Cable Row',
      musclesAffected: [
        findId('Middle_Back'),
        findId('Upper_Back'),
        findId('Biceps_L'),
        findId('Biceps_R')
      ]
    },
    {
      name: 'Hip Thrust',
      musclesAffected: [
        findId('Gluteus_Maximus')
      ]
    },
    {
      name: 'Side Bends',
      musclesAffected: [
        findId('Side_Abs_L'),
        findId('Side_Abs_R')
      ]
    },
    {
      name: 'Back Extension',
      musclesAffected: [
        findId('Lower_Back')
      ]
    },
    {
      name: 'Machine Crunch',
      musclesAffected: [
        findId('Abdominals')
      ]
    }
  ])

}

module.exports = seedDataBase;

