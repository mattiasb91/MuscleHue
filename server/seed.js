'use strict';

// file to seed the database if its empty

const { Muscle, Workout } = require('./models');

async function seedDataBase() {
  console.log("seedin' database.....");

  const muscles = await Muscle.insertMany([
    { name: 'Deltoid' },
    { name: 'Chest' },
    { name: 'Biceps' },
    { name: 'Side abs' },
    { name: 'Abdominals' },
    { name: 'Quadriceps' },
    { name: 'Upper Back' },
    { name: 'Middle Back' },
    { name: 'Lower Back' },
    { name: 'Triceps' },
    { name: 'Gluteus Maximus' },
    { name: 'Hamstring Group' },
    { name: 'Calf' },
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
        findId('Triceps'),
        findId('Deltoid')
      ]
    },
    {
      name: 'Bicep Curl',
      musclesAffected: [
        findId('Biceps')
      ]
    },
    {
      name: 'Pull-Up',
      musclesAffected: [
        findId('Upper Back'),
        findId('Middle Back'),
        findId('Biceps')
      ]
    },
    {
      name: 'Deadlift',
      musclesAffected: [
        findId('Lower Back'),
        findId('Gluteus Maximus'),
        findId('Hamstring Group')
      ]
    },
    {
      name: 'Squat',
      musclesAffected: [
        findId('Quadriceps'),
        findId('Gluteus Maximus'),
        findId('Hamstring Group')
      ]
    },
    {
      name: 'Calf Raise',
      musclesAffected: [
        findId('Calf')
      ]
    },
    {
      name: 'Shoulder Press',
      musclesAffected: [
        findId('Deltoid'),
        findId('Triceps')
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
        findId('Triceps')
      ]
    },
    {
      name: 'Seated Cable Row',
      musclesAffected: [
        findId('Middle Back'),
        findId('Upper Back'),
        findId('Biceps')
      ]
    },
    {
      name: 'Hip Thrust',
      musclesAffected: [
        findId('Gluteus Maximus')
      ]
    },
    {
      name: 'Side Bends',
      musclesAffected: [
        findId('Side abs')
      ]
    },
    {
      name: 'Back Extension',
      musclesAffected: [
        findId('Lower Back')
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

