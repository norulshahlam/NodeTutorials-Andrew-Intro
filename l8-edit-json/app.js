/*
How to:

3. read a json file - this returns buffer
4. convert to JSON 
5. then convert to object
6. change value
7. converts back to json
8. overwrite the original json file
*/
const fs = require("fs");

//3
const dataBuffer = fs.readFileSync("book.json");
//4

const dataJson = dataBuffer.toString();


//5
const data = JSON.parse(dataJson);
console.log(data);
const list = [6,7,8,9,10]

//6
data.name = "odeng";
data.planet = "e";
data.task = 'sleep'
data.list=list


//7
const profile2Json = JSON.stringify(data);
// const profile2Json = JSON.stringify(data,null,2);

//8
fs.writeFileSync("book.json", profile2Json);
console.log(profile2Json);
