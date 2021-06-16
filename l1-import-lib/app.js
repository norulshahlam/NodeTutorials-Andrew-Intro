/*

The require function is how we load in other things whether it's a core node module or another file we created or an NPM module we've chosen to install into use in our projects.

this is at the very core of the module system.

To load in the file system module we have to call the require function which is indeed how we load in modules and we pass to it a single string.

REQUIRE function is a non es6 type. with es6 we can use 'import' statement

We're calling 'require' which is going to load in the FS module. the FS module is built right into node. So this is going to work for any node script.

What do we do with the return value we store it on the fs variable then down below we can use the writeFileSync

The fs.writeFileSync() creates a new file if the specified file does not exist

https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/

*/

const fs = require("fs");

//creates a new file with data if the specified file does not exists
fs.writeFileSync("./notes.txt", "My name is Shah");

//synchronously append the given data to a file. A new file is created if it does not exist
fs.appendFileSync("./notes.txt", " i live in sg");
