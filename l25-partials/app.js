/*
continue from previous lesson,


3. Partials with handlebars partials

as the name suggests it allows you to create a little template which is part of a bigger web page. eg parts of the web page that you're gonna end up reusing across multiple pages in your site. This would be things like headers or footers where you want the exact same thing showing on every page

2. when we make changes to js, BY DEFAULT. nodemon will detect changes and restart server. nodemon doesnt do the same for changes made on other file types. so to enable for other file types, run:

nodemon app.js -e js,hbs,css

3. handle page not found in main url and sub url

4. apply css n icon

*/

const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

const viewsPath = path.join(__dirname, "/views");
const partialsPath = path.join(__dirname, "/partials");

//setup handler engine
app.set("view engine", "hbs");

/* set up 'view' directory in parent/views. all the response will rout to this dir.  */
app.set("views", viewsPath);
/* set up partials dir */
hbs.registerPartials(partialsPath);

// Setup static directory to serve. u also need this for css for your pages to link!
app.use(express.static(__dirname));

//set route
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather app page",
    name: "shah",
  });
});

app.get("/weather", (req, res) => {
  res.render("weather", {
    forecast: "it is snowing",
    location: "philadelphia",
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

//3. this means all other page in help not foubnd
app.get("/help/*", (req, res) => {
  res.render("error", {
    title: "Error",
    message: "Help article not found",
    name: "shah",
  });
});

//3. this means all other page not foubnd. make sure to put at the end before start server
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
