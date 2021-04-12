const express = require("express");
const router = new express.Router();
const User = require("../models/user");

//add user
router.post("/users", async (req, res) => {
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
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send();
  }
});

//get 1 user by id
router.get("/users/:id", async (req, res) => {
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

//delete 1 user
router.delete("/users/:id", async (req, res) => {
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

//update 1 uswer
router.patch("/users/:id", async (req, res) => {
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
module.exports = router;
