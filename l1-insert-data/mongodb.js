/*

as we are connecting to local db, we have to establish connection:
C://Users/NORULSHAHLAM/mongodb/bin/mongod.exe --dbpath=C://Users/NORULSHAHLAM/mongodb-data

most of the query methods rhaas a callback 

go to readme.md for more details

1. add sibngle data
2. add  multiple data
3. add to new collection

http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insert
*/

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

//url must include port number. u can find it in the log after successful connection
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

//all ops happens inside here. 2 main param is db name and collection name u 1 2 add data into

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("uanble to connect to db");
    }
    //db name
    const db = client.db(databaseName);

    /* 1. insert 1 data into 'users' collection
   db.collection("users").insertOne(
      {
        name: "shah",
        age: 35,
      },
      (error, result) => {
        if (error) {
          return console.log("unable to insert data");
        }
        console.log(result.ops);
      }
    );*/

    /* 2. INSERT MANY into 'users' collection
    db.collection("users").insertMany(
      [
        {
          name: "jen",
          age: 21,
        },
        {
          name: "sam",
          age: 99,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert datas");
        }
        console.log(result.ops);
      }
    ); */

    //  2. INSERT MANY into 'tasks' collection
    db.collection("tasks").insertMany(
      [
        {
          description: "wash clothes",
          completed: true,
        },
        {
          description: "pay bills",
          completed: false,
        },
        {
          description: "send kids to school",
          completed: true,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to insert datas");
        }
        console.log(result.ops);
      }
    );
  }
);
