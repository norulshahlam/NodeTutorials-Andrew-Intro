/* 

destructure any obj here

2) note that if an obj contains empty value, destructuring it may cause erorr. so prevent this, we make use of default value where if an obj is empty, we will assign an empty value instead of destructuring an empty obj that will crash the app

*/

const geocode = require("./geocode");
const forecast = require("./forecast");
const chalk = require("chalk");

const address = process.argv[2];

if (!address) {
  console.log("please provide address");
} else {
  //2)
  geocode(address, (error, { lat, long, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(chalk.blue(location));
      console.log(chalk.green(forecastData));
    });
  });
}
