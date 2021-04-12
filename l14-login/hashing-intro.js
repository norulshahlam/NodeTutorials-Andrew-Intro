const bcrypt = require("bcryptjs");
const myFunction = async () => {
  const password = "abc123";
  const hashedPass = await bcrypt.hash(password, 8);
  console.log(password);
  console.log(hashedPass);

  const isMatch = await bcrypt.compare("abc123", hashedPass);
  console.log(isMatch);
};
myFunction();
