/* from the last lesson, 

we chain these 2 func - callback chaining

geocode return the lat n long of a location,
then we  use that data as input for forecast

n lastly use commnad line to run fucn with input for location
run: node app.js boston

validate if an address is inputted

*/

const geocode = require("./geocode");
const forecast = require("./forecast");
const chalk = require("chalk");

const address = process.argv[2];

if (!address) {
  console.log("please provide address");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.lat, data.long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(chalk.blue(data.location));
      console.log(chalk.green(forecastData));
    });
  });
}
