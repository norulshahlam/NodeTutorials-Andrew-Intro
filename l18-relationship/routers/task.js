const express = require("express");
const router = new express.Router();
const Task = require("../models/task");
const auth = require("../middleware/auth");

//add task
router.post("/tasks", auth, async (req, res) => {
  // const task = new Task(req.body);
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

//get all tasks
router.get("/tasks", auth, async (req, res) => {
  try {
    // const tasks = await Task.find({owner:req.user._id});
    await req.user.populate("tasks").execPopulate();
    res.send(req.user.tasks);
    // res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

//get 1 task by id
router.get("/tasks/:id", auth, async (req, res) => {
  const _id = req.params.id;

  try {
    // const task = await Task.findById(id);
    const task = await Task.findOne({ _id, owner: req.user._id });

    if (!task) {
      return res.status(404).send("No task found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

//update 1 task
router.patch("/tasks/:id", async (req, res) => {
  //3.
  const updates = Object.keys(req.body);
  const allowedUpdate = ["description", "completed"];
  const isValid = updates.every((update) => allowedUpdate.includes(update));

  if (!isValid) {
    return res.status(400).send({ Error: "No existing fields" });
  }

  const id = req.params.id;
  try {
    const task = await Task.findById(id);
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    // const task = await Task.findByIdAndUpdate(id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    if (!task) {
      return res.status(404).send({ Error: "ID not found" });
    }

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

//delete 1 task
router.delete("/tasks/:id", async (req, res) => {
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

module.exports = router;
