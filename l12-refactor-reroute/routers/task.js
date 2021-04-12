const express = require("express");
const router = new express.Router();
const Task = require("../models/task");

//add task
router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get all tasks
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

//get 1 task by id
router.get("/tasks/:id", async (req, res) => {
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
