/*
learn about callback. what happends if callback is not used when the server response is slower than the output

a callback function is nothing more than a function we provide as an
argument to another function with the intention of having it called later on.
*/

/*here we are trying to get the food we will be eating for dinner from server and will simulate a slow server response. the items will be 'undefined' cos the data is outputted BEFORE the server respond with the items*/

/**************** WITHOUT CALLBACK ***************/
const makanApa = (meal) => {
  //2. simulate server response so data can only get after 2 secs
  setTimeout(() => {
    const makan = {
      meal: `This is your food for ${meal}`,
      drink: "coke",
      main: "chicken chop",
      dessert: "brownies",
    };

    //3. this part returns undefined cos data is not received yet due to server slow response
    return makan;
  }, 2000);
};

//1. we do a request to server to get data n store into makan
const makan = makanApa("Dinner");
console.log("your food....");
//4. returned undefined
console.log(makan);

/****************** WITH CALLBACK ***************/
/*here we use callback to prevent this prob*/

const makanApa2 = (meal, callback) => {
  setTimeout(() => {
    const makan2 = {
      meal: `This is your food for ${meal}`,
      drink: "coke",
      main: "chicken chop",
      dessert: "brownies",
    };

    //2. once receive data, then it will call this to allow it to output at no.3
    callback(makan2);
  }, 2000);
};

//1. 2nd arg is the callback. it will go to no.2
makanApa2("Dinner", (makan2) => {
  //3.
  console.log("your food....");
  console.log(makan2);
});
