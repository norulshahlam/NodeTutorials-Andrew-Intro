/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T

1. Express Middleware
 
every single request to the API is going to require authentication with the exception of sign up and log in for everything else the client is going to need to provide that authentication token and the server is going to validate it before performing whatever operation they're trying to do.

Express middleware which is going to be at the core of allowing us to get all of this

w/o middleware: new request -> run route handler
with middleware: new request -> do something -> run route handler

middleware is in auth.js

2. logging out

3. logout

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
