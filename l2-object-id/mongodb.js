/*
understanding object id

id field created in db are binary data. the reason they're using binary data over a traditional string has to do with the size and just a way to visualize easier for humans. By using binary instead of a string they're able to cut the size of an object I.D. in half
*/

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require("mongodb");
const id = new ObjectID();

/*So this is a visualization making it easier to see the object I.D. value. So over inside of our code we have this I.D. variable that actually has an I.D. property on it. This contains the raw binary information. Now we can check the length of this by using id.id.length

Now if we were to convert that from binary into a string it would double in size. We're gonna use .toHexString() which is going to convert it over to its string representation. and we're gonna do is check its length.

see that the original representation was just 12 while the string representation was double in size at 24. 

https://docs.mongodb.com/manual/reference/method/ObjectId/
*/
console.log(id.id.length);
console.log(id.toHexString().length);

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

    const db = client.db(databaseName);

    //   insert 1 data
    db.collection("users").insertOne(
      {
        _id: id,
        name: "vicky",
        age: 57,
      },
      (error, result) => {
        if (error) {
          return console.log("unable to insert data");
        }
        console.log(result.ops);
      }
    );

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
