/*  MAKE SURE TO CONNECT TO DB, open Postman and Robo 3T
 
 What we want to do is allow the client to upload an image to the server we want to store that image in the database and we want the server to be able to serve it up so the client can access it later on.

Now in terms of the task manager app what we're going to do is allow users to upload a profile picture so they'll provide an image of a specific file format.

We will use Multer - a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
https://www.npmjs.com/package/multer

a) restrict file size
b) restrict file type
c) link image to user profile by:
       adding new field in user model
d) delete user image
e) fetch user avatar (thru browser)
f) hide image data from client thru User model
g) Auto-Cropping and Image Formatting using sharp npm

 convert large images in common formats to smaller, web-friendly JPEG, PNG, WebP and AVIF images of varying dimensions. As well as image resizing, operations such as rotation, extraction, compositing and gamma correction are available.

 https://www.npmjs.com/package/sharp

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
