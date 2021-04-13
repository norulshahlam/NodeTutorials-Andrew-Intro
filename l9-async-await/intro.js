/*
This allows us to create an async function.
And in that function we can use the await feature.

this is the basic structure of async await
*/
const doWork = async () => {
  throw new Error("something is wrong");
  return "ssssss";
};

doWork()
  .then((result) => {
    console.log("result:", result);
  })
  .catch((e) => {
    console.log("e", e);
  });
