/*
1. obj property shorthand
2. destructuring obj in global scope with renaming
3. destructuring obj as param input
4 default values
5. array destructuring

whole goal of  structuring is to extract object properties and their values into individual variables so instead of calling a 'product.price', we could have 'price' variable with the value of 3.

*/

//1.
const food = "fish";
const drink = "soda";
const dessert = "cake";

const takeout = {
  //w/o shorthand
  food: food,

  //w shorthand. note: both name must be the same to do this
  drink,
  dessert,
};

const product = {
  name: "bread",
  price: 3,
  country: "London",
  expiry: "false",
  Category: "Dry food",
};

//without destructuring
// const name = product.name;
// const address = product.address;

//2. with destructuring
//we can also rename the variable
const { name, address: myAdd } = product;

console.log(name, myAdd);

//3. destruc obj as param in func. in case the obj returns undefined, then this will set its value to null. else the app will crash cos u cant destructure undefined
const transac = (type, { status, employed } = {}) => {
  console.log(type, status, employed);
};
transac("info: ", product);

// 4.
const { price, promotion = "not stated" } = product;
console.log("sample 4. \n" + price, promotion);

const fruits = [
  "apple",
  "banana",
  "carrot",
  "date",
  "elephant",
  "fries",
  "grapefruit",
];

// 5. Here the vaeiable are defines in order. u can skip an elemnt by using ','. here we skip 3rd element. we can also ignore the reminaing element by doing nothing - we ignore the 4th element onwards
const [a, b, , d] = fruits;
console.log(a, b, d);
