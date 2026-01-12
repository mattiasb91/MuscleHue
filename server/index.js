const express = require("express");
const app = express();
const mongoose = require('mongoose');

const cors = require("cors");
const { connectDB, Muscle } = require('./models') // imports the connectDB from the index.js in he models folder
const router = require("./router");
const seedDataBase = require('./seed');
const port = 3000;

app.use(cors());
app.use(express.json());

// async function to first seed the database if its empty, and then start the server:
async function startServer() {
  try {
    await connectDB();
    console.log('Connected DB name:', mongoose.connection.name); // checking that we are actually connected to the right db

    const muscleCount = await Muscle.countDocuments();

    if (muscleCount === 0) {
      console.log('empty database detected, seeding it.');
      await seedDataBase();
    }
    else {
      console.log('database already seeded.');
    }

    app.use(router);

    app.listen(port, () => {
      console.log(`server up and runnin' on http://localhost:${port}`);
    })

  } catch (err) {
    console.error('server failed to start: ', err);
  }
}

startServer(); // actually run the startServer function.

