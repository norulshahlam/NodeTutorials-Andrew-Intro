/*  
find 1 data
find multiple data
*/

const { MongoClient, ObjectID } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("uanble to connect to db");
    }

    const db = client.db(databaseName);

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, user) => {
        if (error) {
          return console.log("unable to fetch");
        }
        console.log(user);
        console.log(user.length);
      });

    //find multiple data. instead of findOne(), we use find(). here .toArray contains multipel data. we can also use .count just print number of results
    // db.collection("users")
    //   .find({ age: 21 })
    //   .toArray((error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch");
    //     }
    //     console.log(user);
    //   });
    // //find one data by id. note u must convert first!
    // db.collection("users").findOne(
    //   { _id: new ObjectID("606a5dee99faa420882d8a75") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );
    // //find one data by name
    // db.collection("users").findOne({ name: "sam" }, (error, user) => {
    //   if (error) {
    //     return console.log("unable to fetch");
    //   }
    //   console.log(user);
    // });

    //   insert 1 data
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "vicky",
    //     age: 57,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert data");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    /* INSERT MANY
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

    //add data in new collection
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "wash clothes",
    //       completed: true,
    //     },
    //     {
    //       description: "pay bills",
    //       completed: false,
    //     },
    //     {
    //       description: "send kids to school",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert datas");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
