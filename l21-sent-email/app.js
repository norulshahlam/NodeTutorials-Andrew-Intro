/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T
 
 you're going to learn how to set up email notifications in the task manager application using https://sendgrid.com/

 a) this will be implemented in router.post("/users") to sent email to uswr who just created an account
 b) this will be implemented in router.delete("/users") to sent email to uswr who close an account


*/
require("./db/mongoose");
const express = require("express");
const app = express();
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
// d)
const port = process.env.PORT || 3000;

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
