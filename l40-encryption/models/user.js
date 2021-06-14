const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

/*********************FOR USERS *********************/
//define model.
const userSchema = new mongoose.Schema({
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

/* added code. run this before save function */
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  //must include nwxt(). this allows your save() to run, else it will hang here
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
