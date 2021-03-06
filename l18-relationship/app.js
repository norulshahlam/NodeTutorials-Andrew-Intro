/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T
 
we will create a relationship between a user and the tasks that they've created. This is going to be important to make sure that users can only access and manage their tasks and they can't mess with someone else's. this is done by:

1. create a users array on the Task model by creating a additional field in task model n assign User reference as 'owner'. so 'owner' field in Task model refers to User id. then we can se execPopulate to get the User profile too thru task id

We're not going to create a tasks array on the User model like we do for task. Instead what we're going to do is set up what's known as a virtual property. 

2. A virtual property is not actual data stored in the database but a relationship between two entities.

In this case between our user and our task to start off we'll be using userSchema.virtual() in user model. It is called the virtual and it allows us to set up one of these virtual actual Buttes. Now it's virtual because we're not actually changing what we store for the user document it is just a way for a mongoose to figure out how these two things are related.

3. we'll be heading over to the task router to add authentication to the task related end points so tasks can be deleted only if it belongs to that user only in routers/task

4. and lastly, for a user who's choosing to delete themselves, we must remove tgt it's tasks too. So if I want to delete my profile, my user data should go away along with all my tasks. this will be done in /models/user.js

*/
require("./db/mongoose");
const express = require("express");
const chalk = require("chalk");
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

// 1. here we test by print out the relationship btwn task and user by id.
const main = async () => {
  const task = await Task.findById("60791d42952c2c28046698b4");
  await task.populate("owner").execPopulate();
  console.log(chalk.magenta(task));
  console.log(chalk.cyan(task.owner));

  const user = await User.findById("60790189c6cff5046483e8bd");
  await user.populate("tasks").execPopulate();
  console.log(chalk.magenta(user));
  console.log(chalk.cyan(user.tasks));
};

main();
