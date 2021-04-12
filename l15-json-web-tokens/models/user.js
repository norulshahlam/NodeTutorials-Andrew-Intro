const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    unique: true,
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

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
//gen token & add to User schema
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString }, "helloworld");
  user.tokens = user.tokens.concat({ token: token });
  await user.save();
  return token;
};

//login user
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Email not found");
  }

  const isMAtch = await bcrypt.compare(password, user.password);
  if (!isMAtch) {
    throw new Error("Password not matched");
  }

  return user;
};

/* added code - hash pswd b4 save */
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
