/*  MAKE SURE TO CONNECT TO DB!

generate authentication token using jwt

Authentication allows your application to know that the person who sending a request to your application is actually who they say they are. The JSON web token (JWT) is one method for allowing authentication, without actually storing any information about the user on the system itself.

token will be added as part of the user model

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
