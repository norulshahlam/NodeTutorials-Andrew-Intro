/*
how to use npm - initialize in root directory
1. npm init -y (y means yes - use the defaults instead of asking questions.)

2. install the packages u wantby running: "npm i validator". u will inatall the latest version. to speciy a version, run: 
npm i validator@10.8.0. in summary,

npm init -y
npm i validator

check for list of installed packages globally: npm list -g --depth 0
check for list of installed packages locally: npm list --depth 0

https://docs.npmjs.com/cli/v7/commands/npm-install

3. for this leson we will use validator package. it has many types of validation like email check etc - npm i validator@10.8.0

B) Node modules.

once we install our 1st package, a folder called node_modules will be created. it contains all the libraries of the installed packages. the 2 package json files containes the index of the installed packages. if u delete the node_modules folder, You can actually recreate this directory from scratch running npm install. it download back all libraries based off of the contents of package.json and package-lock.json 

C) Nodemon

nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

d) install local vs global

we wil install this globally.The only difference is we use the -g flag which is short for global. Node modules package lock Jason and package Jason haven't changed in any way bcos it is installed globally, not the individual project. it's installing the tool on our operating system itself.
*/

const validator = require("validator");
const chalk = require("chalk");

//check if string is valid email
console.log(validator.isEmail("gmail.com"));

//check if string is valid url
console.log(validator.isURL("gmail"));

//using chalk
const chalks = chalk.blue.bgGreen.bold("hello!");
console.log(chalks);
