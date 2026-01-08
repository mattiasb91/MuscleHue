const express = require("express");
const app = express();

const cors = require("cors");
const connectDB = require('./models')
const router = require("./router");
const port = 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use(router);

app.listen(port, () => {
  console.log(`server up and runnin' on http://localhost:${port}`);
})