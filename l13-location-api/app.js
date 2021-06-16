/*
Imagine requesting some data from an API. Depending upon the situation the server might take some time to process the request while blocking the main thread making the web page unresponsive.
That’s where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.

here we are using weather api to get data. 
how to use postman npm to get api data
what are the diff options in postmen to use during fetch
how to use api key
how to do different query by using diff options

*/
const request = require("postman-request");
const url =
  "http://api.weatherstack.com/current?access_key=7d117c37c5c296442226bfb8fb64ecf6&query=37.8267,-122.4233&units=f";

// request({ url: url }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data.current);
// });

//here we set the respone to parse the json for us so we dont need to parse it
request({ url: url, json: true }, (error, response) => {
  //
  //chekc if there is error
  const d = response.body.error;
  console.log(d);
  if (response.body.success === false) {
    return console.log("pls enter url / internet connection");
  }
  if (error) {
    return console.log("pls enter url / internet connection");
  }

  const data = response.body;
  console.log(
    `Temperature is ${data.current.temperature}, but it feels like ${data.current.feelslike}. It is ${data.current.weather_descriptions[0]}`
  );
});
