/*  MAKE SURE TO CONNECT TO DB!

1. refactor code into using async await


*/
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const { ObjectID } = require("bson");

app.use(express.json());

//add user
app.post("/users", async (req, res) => {
  //read the req made
  console.log(req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }

  // user.save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch((e) => {
  //     //4
  //     res.status(400).send(e);
  //   });
});

//get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send();
  }

  // User.find({})
  //   .then((users) => {
  //     res.status(200).send(users);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

//get 1 user by id
app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("No user found");
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }

  // User.findById(req.params.id)
  //   .then((user) => {
  //     //if no user found
  //     if (!user) {
  //       return res.status(404).send();
  //     }
  //     res.send(user);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

//add task
app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }

  // const task = new Task(req.body);
  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //     console.log(task);
  //   })
  //   .catch((e) => {
  //     //4
  //     res.status(400).send(e);
  //   });
});

//get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send();
  }

  // Task.find({})
  //   .then((tasks) => {
  //     res.status(200).send(tasks);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

//get 1 task by id
app.get("/tasks/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).send("No task found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }

  // Task.findById(req.params.id)
  //   .then((task) => {
  //     //if no task found
  //     if (!task) {
  //       return res.status(404).send();
  //     }
  //     res.send(task);
  //   })
  //   .catch((e) => {
  //     res.status(500).send();
  //   });
});

/********** setup port number **********/
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
