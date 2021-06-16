/*
all about express - fast, unopinionated, minimalist web framework for node.

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

1. set your own port number

2. handle a simple get request and return a string

*/

const express = require("express");
const app = express();

//2. run: http://localhost:3000
app.get("", (req, res) => {
  res.send("hello express");
});

//run: http://localhost:3000/help
app.get("/help", (req, res) => {
  res.send("help page");
});

//run: http://localhost:3000/about
app.get("/about", (req, res) => {
  res.send("about page");
});

//run: http://localhost:3000/weather
app.get("/weather", (req, res) => {
  res.send("weather page");
});

//1. set your own port number
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
