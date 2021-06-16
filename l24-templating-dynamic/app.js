/*
continue from previous lesson,

1. Dynamic Pages with Templating - use template engine using handlebars npm

A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

simply go to url to load the pages (WITHOUT the html ext, else it will route to static folder)
http://localhost:3000/
http://localhost:3000/help
http://localhost:3000/about


https://expressjs.com/en/guide/using-template-engines.html

run npm:  npm i hbs

*/

const express = require("express");
const path = require("path");
const app = express();
console.log(path.join(__dirname));

//this will still allow us to use static pages
app.use(express.static(path.join(__dirname, "/pages")));

//setup handler engine
app.set("view engine", "hbs");

/* set up 'view' directory in parent/views. all the response will rout to this dir.  */
app.set("views", path.join(__dirname, "/views"));

//set route. here u r specifying this url to go to index.hbs in 'views' folder, which we specified above in app.set()
app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "shah",
  });
});

app.get("/weather", (req, res) => {
  res.render("weather", {
    forecast: "it is snowing",
    location: "philadelphia",
    name: "shah",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "shah",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "What do you need help for?",
    name: "shah",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
