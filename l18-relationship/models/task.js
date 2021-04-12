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
  //1. define relationship here
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = Task;
