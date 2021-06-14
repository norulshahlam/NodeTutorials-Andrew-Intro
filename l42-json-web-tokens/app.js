/*  MAKE SURE TO CONNECT TO DB!

1. generate authentication token using jwt

Authentication allows your application to know that the person who sending a request to your application is actually who they say they are. The JSON web token (JWT) is one method for allowing authentication, without actually storing any information about the user on the system itself.

token will be added as part of the user model. 

2. Mongoose Schema statics vs methods

The statics object contains functions that are associated with the model itself, and not the individual instances. An advantage of using statics is that we do not need access to an instance of the class in order to access the functionality associated with it

https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
https://stackoverflow.com/questions/51038621/mongoose-schema-statics-vs-methods


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
