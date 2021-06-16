/*
continue from previous lesson,

this time we send the response in html, json.
NOTE: this is not returning html file, only in html element 

*/

const express = require("express");
const app = express();

//render in html
app.get("", (req, res) => {
  res.send("<h1>hello express</h1>");
});

//render in obj
app.get("/help", (req, res) => {
  res.send({
    name: "shah",
    age: 21,
    employed: "true",
  });
});

//run: http://localhost:3000/about
app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

//run: http://localhost:3000/weather
app.get("/weather", (req, res) => {
  res.send({
    location: "sg",
    forecast: "snow",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
