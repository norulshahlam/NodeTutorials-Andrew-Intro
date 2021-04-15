/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T
 
we're going to kick off the section by learning how we can enable Timestamps for our Mongoose models.

So we'll be doing this for both our users and our tasks. So for users and tasks we'll know when the user first signed up or when the task is created. And we'll also know when the user or task was last updated 

1. We will customize the User schema by providing a second argument. by set 'timestamps: true'. by default this option is set to false. Now that we have this in place anytime we create a new user they're going to be created with those two additional fields - when they were created and when they were last updated

2. Task schema will also use the same way. and since task is using moodel(), we will refactor it firrst to use .Schema() first.

3. filtering tasks

we will limited the tasks to view by giving a string param eg tasks?completed=true. or false, if no param is provided, it will show all. al of this is done in task router

4. limit the task results by using limit & skip

if limit=10 &skip=0 -> show 1st 10 pages
if limit=10 &skip=10 -> skip 1st 10-show 2nd 10 pages
if limit=10 &skip=20 -> skip 1st 20-show 3rd 10 pages
 
and so on....this is called pagination

Pagination is the process of splitting the contents of a website, or a section of contents from a website, into discrete pages. ... It is prevalent in web design, appearing in most web applications to allow direct access to divided contents across a number of different pages.

5. sort tasks by date created

6. sort by completed tasks
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
