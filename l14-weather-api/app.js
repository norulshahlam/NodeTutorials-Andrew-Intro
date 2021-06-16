/*
in continuation from previous lesson,

we add another api 
how to handle error eg no network or no results found

*/
const request = require("postman-request");

//tempearture api
const url =
  "http://api.weatherstack.com/current?access_key=7d117c37c5c296442226bfb8fb64ecf6&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to weather services");
  } else if (response.body.error) {
    console.log("unable to find location");
  } else {
    const data = response.body;
    console.log(
      `Temperature is ${data.current.temperature}, but it feels like ${data.current.feelslike}. It is ${data.current.weather_descriptions[0]}`
    );
  }
});

// location api
const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibm9ydWxzaGFobGFtIiwiYSI6ImNrbXlvdDB4YjA1eXkydm1mbGx2OThwbXYifQ.b3OjSSp1B_p17WJBW7u3BA";

request({ url: url2, json: true }, (error, response) => {
  if (error) {
    console.log("network not connected");
  } else if (response.body.features.length === 0) {
    console.log("results not found");
  } else {
    const lat = response.body.features[0].center[0];
    const long = response.body.features[0].center[1];
    console.log(lat, long);
  }
});
