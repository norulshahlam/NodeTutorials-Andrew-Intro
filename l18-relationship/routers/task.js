const express = require("express");
const router = new express.Router();
const Task = require("../models/task");
const auth = require("../middleware/auth");

//add task (of logged user)
router.post("/tasks", auth, async (req, res) => {
  // const task = new Task(req.body);
  //updated to ensure task belongs to logged in user
  //below: add the added task + user id
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get all tasks - of logged user
router.get("/tasks", auth, async (req, res) => {
  try {
    //updated to ensure task belongs to logged in user
    // const tasks = await Task.find({owner:req.user._id});
    //alternative to above
    await req.user.populate("tasks").execPopulate();
    res.send(req.user.tasks);
    // res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

//get 1 task by id (of logged user)
router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    // const task = await Task.findById(id);
    //updated to ensure task belongs to logged in user
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send("No task found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//update 1 task (of logged user)
router.patch("/tasks/:id", auth, async (req, res) => {
  //3.
  const updates = Object.keys(req.body);
  const allowedUpdate = ["description", "completed"];
  const isValid = updates.every((update) => allowedUpdate.includes(update));

  if (!isValid) {
    return res.status(400).send({ Error: "No existing fields" });
  }

  const _id = req.params.id;
  const owner = req.user._id;
  try {
    //updated to ensure task belongs to logged in user
    const task = await Task.findOne({ _id, owner });
    // const task = await Task.findById(id);
    // const task = await Task.findByIdAndUpdate(id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    if (!task) {
      return res.status(404).send({ Error: "ID not found" });
    }
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

//delete 1 task (of logged user)
router.delete("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;
  const owner = req.user._id;
  try {
    // const task = await Task.findByIdAndDelete(id);
    //updated to ensure task belongs to logged in user
    const task = await Task.findByIdAndDelete({ _id, owner });

    if (!task) {
      return res.status(404).send({ Error: "ID not found" });
    }

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
