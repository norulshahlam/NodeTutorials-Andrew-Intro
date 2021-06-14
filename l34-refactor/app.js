/*

MAKE SURE TO CONNECT TO DB!

1. refactor code, seperate all tasks and users query into individual file,

2. use nodemon.

3. express for resource endpoint creation - all requests will use postman

previously we use mongoose to create model and save data. this only works internally in your own script. with express, u can create endpoints so requests can be made externally

http://expressjs.com/en/4x/api.html

Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.

APIs work using ‘requests’ and ‘responses.’ When an API requests information from a web application or web server, it will receive a response. The place that APIs send requests and where the resource lives, is called an endpoint.

https://smartbear.com/learn/performance-monitoring/api-endpoints/

4. handle error response using appropriate response status code

5. Resource Endpoint for Reading resources - Queries!

https://mongoosejs.com/docs/queries.html


*/
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

/* It's going to automatically pass incoming Jason to an object so we can access it in our request handlers. */
app.use(express.json());

app.post("/users", (req, res) => {
  /*read the req made. try send your req in raw format, object:
  {
    name: 'bob',
    age: 40
  }
  */
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      //4
      res.status(400).send(e);
    });
});

//get all tasks
app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
      console.log(task);
    })
    .catch((e) => {
      //4
      res.status(400).send(e);
    });
});

//get all users
app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
//get 1 user by id
app.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      //if no user found
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

//get all tasks
app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch((e) => {
      res.status(500).send();
    });
});
//get 1 task by id
app.get("/tasks/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((task) => {
      //if no task found
      if (!task) {
        return res.status(404).send();
      }
      res.send(task);
    })
    .catch((e) => {
      res.status(500).send();
    });
});

/********** setup port number **********/
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
