const http = require("http");
const chalk = require("chalk");

/*
we learn how to use raw http request, without the use of npm libraries
*/

const url = `http://api.weatherstack.com/current?access_key=7d117c37c5c296442226bfb8fb64ecf6&query=45,-75&units=f`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    //res received is in chunk, need to convert
    data = data + chunk.toString();
    console.log(chalk.blue(data));
  });
  response.on("end", () => {
    // at this point, `body` has the entire request body stored
    const body = JSON.parse(data);
    console.log(chalk.yellow("end"));
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(chalk.red("error", error));
});

request.end();
