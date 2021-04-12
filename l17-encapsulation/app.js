/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T

1. hiding private data - using toJSON in user model

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
