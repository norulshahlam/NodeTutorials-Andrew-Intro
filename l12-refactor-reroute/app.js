/*  MAKE SURE TO CONNECT TO DB!

We now have end points for managing day for CRUD operations for our resources we can create, read, update, delete.

Now we're going to learn how to refactor our application so you don't have every single route defined in these same file. it's typically best to break that up into many small files when we find ourselves in a situation with a single file that always just gets longer and longer as we add more features.

We'll be setting up multiple express routers and we'll be combining them together to create the complete application. Now you can have as many routers as you need but typically it makes sense to categorize them by the resource.

So in our case we'll have one new router for the user related routes and we'll have a separate new router for the task related routes as we add more functionality to the application.

We could create more routes to stay organized. We will be creating separate files for all of this.

*/
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

/********** setup port number **********/
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
