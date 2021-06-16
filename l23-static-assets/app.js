/*
continue from previous lesson,

1. this time we serve up static assets. using 'use()' to set up, we can route to the html pages. simply use url with the extension:

http://localhost:3000/help.html
http://localhost:3000/about.html


NOTE: we can stil use app.use() at the same time. 
if http://localhost:3000/help is used instead of http://localhost:3000/help.html, then it will go to app.use() instead of static page handler

2. make use of path.join() - The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. 

https://nodejs.org/api/path.html#path_path_join_paths

*/

const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname); //current dir path

//this is just taking the current dir path and rerouting it
const publicDir = path.join(__dirname, "/pages");

//this will allow us to use static pages
app.use(express.static(publicDir));

// app.get("", (req, res) => {
//   res.send("<h1>hello express</h1>");
// });

// app.get("/help", (req, res) => {
//   res.send({
//     name: "shah",
//     age: 21,
//     employed: "true",
//   });
// });

//run: http://localhost:3000/about
// app.get("/about", (req, res) => {
//   res.send("<h1>about</h1>");
// });

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

/*
now with 3 pages created, simply go to url to load the static pages
http://localhost:3000/
http://localhost:3000/help.html
http://localhost:3000/about.html

*/
