/*
passing argument using yargs. install first: npm i yargs@12.0.2

Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

*/

const yargs = require("yargs");
//u can customize the version:
yargs.version("1.1.0");

//u can run this add command by using: node app.js add
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});
//u can add multiple commnads. this is for remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("remove a note!");
  },
});

//using yargs. u can use arg as object
//run: node app.js abc --name="shah"
console.log(yargs.argv);
