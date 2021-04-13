/*  MAKE SURE TO CONNECT TO DB!

existing:
add user
get all users
get 1 user by id
add task
get all tasks
get 1 task by id

1. update data / task
by default the update method returns old data. we can set to return to updated data.

2. the method return nothing if no id is found. we handle it by set it to status 404

3. how to handle if field to update doesnt exists

4. delete 1 data & 1 task

*/
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

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
});
//get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send();
  }
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
});
//get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send();
  }
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
});
//update 1 user
app.patch("/users/:id", async (req, res) => {
  //3.
  const updates = Object.keys(req.body);
  const allowedUpdate = ["name", "email", "password", "age"];
  const isValid = updates.every((update) => allowedUpdate.includes(update));

  if (!isValid) {
    return res.status(400).send({ Error: "No existing fields" });
  }

  const id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(id);
    console.log(user);

    if (!user) {
      return res.status(404).send({ Error: "ID not found" });
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
//update 1 task
app.patch("/tasks/:id", async (req, res) => {
  //3.
  const updates = Object.keys(req.body);
  const allowedUpdate = ["description", "completed"];
  const isValid = updates.every((update) => allowedUpdate.includes(update));

  if (!isValid) {
    return res.status(400).send({ Error: "No existing fields" });
  }

  const id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(id);
    console.log(task);

    if (!task) {
      return res.status(404).send({ Error: "ID not found" });
    }

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});
//delete 1 user
app.delete("/users/:id", async (req, res) => {
  //3.

  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send({ Error: "ID not found" });
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
//delete 1 task
app.delete("/tasks/:id", async (req, res) => {
  //3.

  const id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).send({ Error: "ID not found" });
    }

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});
/********** setup port number **********/
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
