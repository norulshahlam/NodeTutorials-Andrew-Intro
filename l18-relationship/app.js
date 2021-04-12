/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T


we will create a relationship between a user and the tasks that they've
created. This is going to be important to make sure that users can only access and manage their tasks and they can't mess with someone else's.

1. We're going to create a users array on the Task model by creating a additional field in task model n assign User reference as 'owner'. so 'owner' field in Task model refers to User id


BUT we're not going to create a tasks array on the User model like we do for task

2. Instead what we're going to do is set up what's known as a virtual property. a virtual property is not actual data stored in the database but a relationship between two entities.

In this case between our user and our task to start off we'll be using something on user schema. It is called the virtual and it allows us to set up one of these virtual actual Buttes. Now it's virtual because we're not actually changing what we store for the user document it is just a way for a mongoose to figure out how these two things are related.

3. we'll be heading over to the task router to add authentication to the task related end points.

4. and lastly, or a user who's choosing to delete themselves, we must remove tgt it's tasks too. So if I want to delete my profile, my user data should go away along with all my tasks. this will be done in /models/user.js

*/
require("./db/mongoose");
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

/********** setup port number **********/
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

//here we test by print out the relationship btwn task and user by id.
const main = async () => {
  // const task = await Task.findById("60742cbcfcdc2c0b4ca301a6");
  // await task.populate("owner").execPopulate();
  // console.log(chalk.cyan("owner", task.owner));
  //
  // const user = await User.findById("6073f23a85b853070c083a4b");
  // await user.populate("tasks").execPopulate();
  // console.log(chalk.magenta("user", user.tasks));
};

main();
