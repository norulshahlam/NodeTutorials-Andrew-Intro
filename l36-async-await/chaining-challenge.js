/*
refactor exisiting code into async await
*/

require("../l7-refactor/db/mongoose");
const User = require("../l7-refactor/models/user");

// User.findByIdAndUpdate("606d7d6b877c1912443a73d4", { age: 1 })
//   .then((user) => {
//     console.log(user);

//     //this is the part where we chain to the next query
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log("count: " + result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age }, { new: true });
  const count = await User.countDocuments({ age });
  console.log(user);
  return count;
};
updateAgeAndCount("606d9fefcf0da80c8c8f731e", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
