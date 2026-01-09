const express = require("express");
const app = express();

const cors = require("cors");
const connectDB = require('./models') // imports the connectDB from the index.js in he models folder
const router = require("./router");
const port = 3000;

app.use(cors());
app.use(express.json());

connectDB();    // here we call and connect to the db. bit different from previously done

app.use(router);

app.listen(port, () => {
  console.log(`server up and runnin' on http://localhost:${port}`);
})