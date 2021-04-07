/*
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

make sure u install mongoose!

https://mongoosejs.com/docs/guide.html

4 simple steps:

1. connnection,
2. define model,
3. add data,
4. save data
*/

//1. connnection
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

//2. define model.
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

//3. add data
const me = new User({
  name: "shah",
  age: 21,
});

//4. save data
me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("error", error);
  });

//2. define model
const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

//3. add data
const task1 = new Task({
  description: "wash clothes",
  completed: false,
});

//4. save data
task1
  .save()
  .then(() => {
    console.log(task1);
  })
  .catch((error) => {
    console.log("error", error);
  });
