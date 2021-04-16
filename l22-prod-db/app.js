/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T
 
 In this lesson we're going to start the process of deploying the task manager application to production.

The goal is to (1) get a production ready Mongo DB database and then (2) the next lesson will actually set everything up on Heroku to get our application deployed and working with that new database.

But as mentioned step (1) is to get a production ready database in place. Right now the only database we have is the one running locally on our machine and that's not going to work for when we deploy our application to Heroku.

We want to use a mongo D.B. hosting service to get a database up and running that our Heroku app can connect to.

*/
require("./db/mongoose");
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// d)
const port = process.env.PORT;

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
