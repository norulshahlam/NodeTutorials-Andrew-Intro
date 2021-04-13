/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T

1. hiding private data - currently we r displaying the all user data when user is logged in, including password n token array.this is a securtiy issue. we will remove the sensitive data using userSchema.methods.toJSON in user model. once this is done, all users sent back to client will be reflected.

we've set up a toJSON() on the user where we manipulate the object sending back just the properties we want to expose and the end result is that we no longer see password or tokens any time the user gets sent back to the client now that we have this in place we're no longer in any danger of exposing user data that we didn't want to expose

further reading: https://contactsunny.medium.com/hide-properties-of-mongoose-objects-in-node-js-json-responses-a5437a5dbec2

2. refactor delete and update route

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
