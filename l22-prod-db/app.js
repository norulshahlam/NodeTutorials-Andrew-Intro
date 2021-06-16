/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T
 
1. In this lesson we're going to start the process of deploying the task manager application to production.

The goal is to (1) get a production ready Mongo DB database and then (2) the next lesson will actually set everything up on Heroku to get our application deployed and working with that new database.

But as mentioned step (1) is to get a production ready database in place. Right now the only database we have is the one running locally on our machine and that's not going to work for when we deploy our application to Heroku.

We want to use a mongo D.B. hosting service to get a database up and running that our Heroku app can connect to.

2. set up custom environment variables for your node.js applications. using npm i env-cmd@8.0.2 - A simple node program for executing commands using an environment from an env file.

c) we will set the above package in order to access the env variables. in package.json, alter your dev script by adding the following:

   "dev": "env-cmd l21-sent-email/config/dev.env nodemon l21-sent-email/app.js"

 Environment variables are a fundamental part of developing with Node.js, allowing your app to behave differently based on the environment you want them to run in. 

But when it runs locally on our machine now there are two major reasons why using environment variables is super important. The first has to do with security and the second has to do with customize ability.

omce set, we will set env variables for

d) port number
e) sendgrid api key
f) jwt SECRET KEY
g) mongodb url

note that for changes in env var, u need to restart server manually
*/
require("./db/mongoose");
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// d)
const port = process.env.PORT;
console.log("object");
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

/********** setup port number **********/
app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const Task = require("./models/task");
const User = require("./models/user");

/********** Example how to use multer **********/
const multer = require("multer");
const upload = multer({
  //by using this, it will bypass the req obj and we wont be able to handle it properly
  dest: "./l20-file-uploads/testUploads",
  limits: {
    //a) restrict file size
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    //b) restrict file type
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("pls upload doc or docx type"));
    }
    if (!file.originalname.endsWith("pdf")) {
      return cb(new Error("pls upload pdf"));
    }

    // cb(new Error('File type not accepted'))
    cb(undefined, true);
  },
});
//localhost:3000/upload. use form data with 'upload' as key and upload image under value
app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ Error: error.message });
  }
);
