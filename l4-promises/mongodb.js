/*
1. use promise api and implement into our existing code

2. use update 1 query and many query with condition

3. inc a value in data field

4. delete data

http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateMany

*/

const { MongoClient } = require("mongodb");
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

    //delete 1 data
    db.collection("users")
      .deleteOne({
        //get all completed fields this age n del it
        age: 99,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    //delete many data
    // db.collection("users")
    //   .deleteMany({
    //     //get all completed fields this age n del it
    //     age: 57,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // //update many
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       //get all completed fields having false,
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         //and set it to true
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //  update 1 data by id n inc age by 1
    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("606a8d4a73d080201c256bf7") },
    //     {
    //       $set: {
    //         name: "testing1",
    //       },
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
