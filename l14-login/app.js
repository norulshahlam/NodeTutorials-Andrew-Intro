/*  MAKE SURE TO CONNECT TO DB!

login user

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