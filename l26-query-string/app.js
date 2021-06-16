/*
continue from previous lesson,

1. how to use query string on the adress bar
2. integrate weather and geocode api into /weather page

nodemon app.js -e js,hbs,css
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

//1. run: http://localhost:3000/products?search=games&rating=5
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

//run: http://localhost:3000/weather?address=boston
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

app.listen(3000, () => {
  console.log("server is up on port 3000");
});

/*
now with 3 pages created, simply go to url to load the static pages
http://localhost:3000/
http://localhost:3000/help.html
http://localhost:3000/about.html

*/
