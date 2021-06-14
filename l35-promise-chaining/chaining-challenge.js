/*
challenge is to remove a task by id, then count number of imcomplete tasks, all using fetch chaining
*/

require("../l7-refactor/db/mongoose");
const Task = require("../l7-refactor/models/task");

Task.findByIdAndDelete("606dc2c9edf4190530dd8d77")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: true });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
