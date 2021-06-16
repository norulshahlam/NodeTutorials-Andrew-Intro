const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=7d117c37c5c296442226bfb8fb64ecf6&query=${lat},${long}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to weather services", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else {
      const data = response.body;
      callback(
        undefined,
        `It is ${data.current.weather_descriptions[0]}. Temperature is ${data.current.temperature}, but it feels like ${data.current.feelslike}. `
      );
    }
  });
};

module.exports = forecast;
