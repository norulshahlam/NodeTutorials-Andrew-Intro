/*
this is how toJSON works
*/

const chalk = require("chalk");

const pet = {
  name: "bob",
  email: "shah@gmail.com",
  password: "abc123",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcxMTMzMTk4ZjIxNTE1MDgwN2E2MzYiLCJpYXQiOjE2MTgxOTIzNzZ9.7kbX9nHbSUE5ytk-uSevNrz3PfwT14JEJ41ueuuZz2Q",
};
console.log(chalk.white(JSON.stringify(pet)));

//removing part of the data
pet.toJSON = function () {
  delete pet.password;
  delete pet.token;
  return pet;
};

console.log(chalk.yellow(JSON.stringify(pet)));
