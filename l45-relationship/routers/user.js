const express = require("express");
const router = new express.Router();
const User = require("../models/user");

const auth = require("../middleware/auth");

//create user
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//login user
router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send("Error finding by credentials");
  }
});

//logout
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});
//logout all
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});
//get logged in user
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
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

//delete 1 user
router.delete("/users/me", auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.user._id);

    // if (!user) {
    //   return res.status(404).send({ Error: "ID not found" });
    // }
    await req.user.remove();
    res.send(`user deleted: ${req.user}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

//update 1 uswer
router.patch("/users/me", auth, async (req, res) => {
  //3.
  const updates = Object.keys(req.body);
  const allowedUpdate = ["name", "email", "password", "age"];
  const isValid = updates.every((update) => allowedUpdate.includes(update));

  if (!isValid) {
    return res.status(400).send({ Error: "No existing fields" });
  }
  // const id = req.params.id;
  try {
    // const user = await User.findById(id);
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();

    // if (!user) {
    //   return res.status(404).send({ Error: "ID not found" });
    // }

    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
