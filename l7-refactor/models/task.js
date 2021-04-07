const mongoose = require("mongoose");
const validator = require("validator");

/*********************FOR TASKS *********************/
// define model.
const Task = mongoose.model("Task", {
  description: {
    type: String,
    //1. mongoose validation
    required: true,
  },
  completed: {
    //4
    default: false,
    type: Boolean,
    //1. mongoose validation
  },
});

module.exports = Task;
