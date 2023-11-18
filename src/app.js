const express = require("express");
const app = express();
const morgan = require("morgan");
const {default: helmet} = require("helmet")
const compression = require("compression")

//init middleware
app.use(morgan("dev"));
app.use(helmet())
app.use(compression())
//init DB

//init Route
app.get("/", (req, res, next) => {
    const message = "hello world"
  return res.status(200).json({ message: message.repeat(100_000) });
});

//init Error

module.exports = app;
