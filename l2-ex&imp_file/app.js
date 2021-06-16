/*
how to access variables / func from other js files. simply export variable from that other file and import here
*/

const add = require("./utils");

const i = add(1, 2);
console.log(i);
