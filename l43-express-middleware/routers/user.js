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
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//2. login user
router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

//3. logout
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

/* get 1 user - we can use middleware by adding another arg 'auth'. 
We now have a route that allows a user to get their profile when they're authenticated.
we dont use the below route anymore get("/users") as we 1 to show the profile tht is logged iin. 
below code currently shows all users when 1 user is logged in */
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});
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
    const user = await User.findById(id);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    // const user = await User.findByIdAndUpdate(id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    if (!user) {
      return res.status(404).send({ Error: "ID not found" });
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
