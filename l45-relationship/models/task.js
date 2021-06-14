const mongoose = require("mongoose");

/*********************FOR TASKS *********************/

const Task = mongoose.model("Task", {
  description: {
    type: String,

    required: true,
  },
  completed: {
    default: false,
    type: Boolean,
  },
  /*  1. define relationship here. So over inside of the task model we have a reference to the user on owner owner is a real field. It is stored in the database. */
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = Task;
