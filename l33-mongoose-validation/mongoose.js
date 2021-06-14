/*
validation and sanitisation

Validation: Validation is the process of ensuring that input data falls within the expected domain of valid program input. 

Sanitization may include the elimination of unwanted characters from the input by means of removing, replacing, encoding, or escaping the characters.
----------------------------------------------------------------------

mongoose provides validation but limited. we will use npm validator to validate complex data like valid email, credit card, hash, url etc

1. validate using mongoose
2. validate using validator npm
3. trim & lowercase on email using mongoose - remove the white spaces from the string at both ends (not in btwn)
4. set default value on age
5. set min length

*/

const mongoose = require("mongoose");

const validator = require("validator");
// connnection. make sure u include the db name too
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

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

// add data
const task = new Task({
  description: "fish",
  // completed: "true",
});

// save data
task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log("error", error);
  });

/*********************FOR USERS *********************/
// define model.
// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     //1. mongoose validation
//     required: true,
//   },
//   age: {
//     //4
//     default: 0,
//     type: Number,
//     //1. mongoose validation
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age cant bbe below 0");
//       }
//     },
//   },
//   email: {
//     type: String,
//     //3.
//     trim: true,
//     lowercase: true,
//     //2. validator validation
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is invalid");
//       }
//     },
//   },
//   password: {
//     type: String,
//     trim: true,
//     required: true,
//     //5
//     minlength: 7,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("Password cannot caontains password");
//       }
//     },
//   },
// });

// // add data
// const me = new User({
//   name: "   bfb  sam",
//   age: 23,
//   email: "WEEike@gmail.com  ",
//   password: "    passwosrgr    ",
// });

// // save data
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
