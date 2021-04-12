/*
validation and sanitisation

Validation: Validation is the process of ensuring that input data falls within the expected domain of valid program input. 

Sanitization may include the elimination of unwanted characters from the input by means of removing, replacing, encoding, or escaping the characters.
----------------------------------------------------------------------

mongoose provides validation but limited. we will use npm validator to validate complex data like valid email, credit card, hash, url etc

1. validate using mongoose
2. validate using validator
3. trim & lowercase on email using mongoose - remove the white spaces from the string at both ends (not in btwn)
4. set default value on age
5. set min length

*/

const mongoose = require("mongoose");

// connnection. make sure u include the db name too
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
