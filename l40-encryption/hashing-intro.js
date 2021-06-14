/*
how to hash password
how to compare if password matches with hashed pswd
*/
const bcrypt = require("bcryptjs");
const myFunction = async () => {
  const password = "abc123";
  const hashedPass = await bcrypt.hash(password, 8);
  console.log(password);
  console.log(hashedPass);

  //this method compares the password string with hashed string and returns true is matched
  const isMatch = await bcrypt.compare("abc123", hashedPass);
  console.log(isMatch);
};
myFunction();
