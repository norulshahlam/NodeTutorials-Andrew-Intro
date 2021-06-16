/* 

based on the callback we've learnt, we will now use calllback on our 2 functions

also use sepeate the function creation from fucn call. this allow cleaner code n reusablility

*/

const geocode = require("./geocode");
const forecast = require("./forecast");
const chalk = require("chalk");

geocode("boston", (error, data) => {
  console.log("error", error);
  console.log("data", data);
});

forecast(37.8267, -122.4233, (error, data) => {
  console.log("error", error);
  console.log("data", data);
});
