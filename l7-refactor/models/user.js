const mongoose = require("mongoose");

const validator = require("validator");

/*********************FOR USERS *********************/
//define model.
const User = mongoose.model("User", {
  name: {
    type: String,
    //1. mongoose validation
    required: true,
  },
  age: {
    //4
    default: 0,
    type: Number,
    //1. mongoose validation
    validate(value) {
      if (value < 0) {
        throw new Error("Age cant bbe below 0");
      }
    },
  },
  email: {
    type: String,
    //3.
    trim: true,
    lowercase: true,
    //2. validator validation
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    trim: true,
    required: true,
    //5
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot caontains password");
      }
    },
  },
});

module.exports = User;
