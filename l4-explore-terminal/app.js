/*
using input in terminal. 

we can run the js file while inputting a value
*/

//if u print this, it show the value of all related inputs in array. usually the 1st 2 is the system variables. then the rest is your input
const command = process.argv;
console.log(command);

//run: node app.js abc. 'abc' is the input
//chk if there is any user input
input = command[2];
if (input) {
  console.log("input is: " + input);
}
