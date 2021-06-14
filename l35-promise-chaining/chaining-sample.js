require("../l7-refactor/db/mongoose");
const User = require("../l7-refactor/models/user");

/*
here we apply the same chaining on user we find a user by id and update age to = 1. then we chain it and count the number of user having age of 1
*/

User.findByIdAndUpdate("606d7d6b877c1912443a73d4", { age: 1 })
  .then((user) => {
    console.log(user);

    //this is the part where we chain to the next query
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log("count: " + result);
  })
  .catch((e) => {
    console.log(e);
  });
