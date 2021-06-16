/*
How to:

1. create data
2. convert to json
3. create new json file and add json data

*/

const fs = require("fs");

//1
const profile = { name: "Guntherrrr", planet: "Earth", age: 54 };
//2
const profileJson = JSON.stringify(profile);
//3
fs.writeFileSync("book.json", profileJson);
