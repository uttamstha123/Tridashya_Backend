const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/api/users", require("./routes/userRoutes"));

// DATABASE CONNECTION
connectDb().then(() => {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
