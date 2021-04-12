/*  MAKE SURE TO CONNECT TO DB!

1. authentication and security

of the most basic things every application should do which is securely storing users passwords by encryption

2. using npm bcrypt.js to encrypt password

encryption algorithm can turn that random series of characters back in to the original value.

hashing algorithms don't work like this they are one way which means we can't reverse the process.

3. middleware

we're going to customize the User model Mongoose supports what's known as middleware as a way to customize the behavior of your Mongoose model and it's going to allow us to do some pretty interesting things to explore this.

we can register some functions to run before or after given events occur. for example validate(), I could run some code just before or just after a user is validated. I could also run some code just before or just after a user is saved and we have other events down below as well. In our case we want to focus on Save() - run some code just before a user is saved. We're gonna check if there's a plain text password and if there is we'll go ahead and hash it.


change the user model from:
const User = mongoose.model("User", {.... > 
const UserSchema = new mongoose.Schema({...

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
