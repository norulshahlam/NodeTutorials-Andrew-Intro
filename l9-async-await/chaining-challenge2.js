/*
challenge is to refactor exisiting code into async await
*/

require("../l7-refactor/db/mongoose");
const Task = require("../l7-refactor/models/task");

// Task.findByIdAndDelete("606dc2c9edf4190530dd8d77")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteAndCountTask = async (id) => {
  const task = await Task.findOneAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  console.log(task, count);
  return count;
};
deleteAndCountTask("606da3d10fb3100d803b8618")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
