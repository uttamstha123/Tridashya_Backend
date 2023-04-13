const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");

connectDb();

const port = process.env.PORT || 5000;
const app = express();
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
