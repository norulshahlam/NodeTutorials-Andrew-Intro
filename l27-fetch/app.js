/*
continue from previous lesson,

1. we will use Browser HTTP Requests with Fetch

Previous lesson we forecast data from server side by query parsing in the url address bar. Now the goal is to figure out how to make an HTTP request for that forecast data from client side JavaScript in the browser that's going to allow us to create a form submit it fetch the data and then on the fly read render the page to show that weather information over in Visual Studio code.

the client-side js file we will doing on will be at /js/app.js

2. Creating a Search Form to handle address queryn print result to console

3. take the result which are printing to the console and have them show up in a browser instead 

4. apply some styling to the form

run: nodemon app.js -e js,hbs,css 

5. deply to heroku - refer to readme.md
*/

const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const viewsPath = path.join(__dirname, "/views");
const partialsPath = path.join(__dirname, "/partials");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const chalk = require("chalk");

const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(__dirname));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app page",
    name: "shah",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me page",
    name: "Shah",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    help: "What do you need help for?",
    title: "Help page",
    name: "Shah",
  });
});

//1.
// http://localhost:3000/products?search=games&rating=5
//req stores the above query
app.get("/products", (req, res) => {
  //refers to search=games
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query.search);
  res.send({
    products: req.query.search,
  });
});

// http://localhost:3000/weather?address=boston
app.get("/weather", (req, res) => {
  //refers to address=boston
  if (!req.query.address) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  geocode(req.query.address, (error, { lat, long, location } = {}) => {
    if (error) {
      return res.send({
        error: error,
      });
    }

    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return res.send({
          error: error,
        });
      }

      console.log(chalk.blue(location));
      console.log(chalk.green(forecastData));
      res.send({
        address: req.query.address,
        location,
        forecast: forecastData,
      });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "Error",
    message: "Help article not found",
    name: "shah",
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    title: "error",
    message: "page not found",
    name: "shah",
  });
});

app.listen(port, () => {
  console.log("server is up on port " + port);
});

/*
now with 3 pages created, simply go to url to load the static pages
http://localhost:/+port
http://localhost:3000/help.html
http://localhost:3000/about.html

*/
