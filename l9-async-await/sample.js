/*
From our previous lesson on promise chaining,

it can cause problems and it's a bit easy to misunderstand what's going on. We have a lot of different functions and return values. And when we return something that impacts what happens further down the chain.

This can get us into some confusing situations async await was added to help fight that off. 

Another big problem with promise chaining is that it's difficult to have all of the values in the same scope. we have our first variable then down below in this function we have access to the second variable. What if I wanted to have access to both of those sums at the same time to do something?

There's no easy way to do that but we would have to do is create variables in the parent scope and then reassign them in here. And it turns into a mess really quickly with async await.

In async/await,

It's pretty easy to see what's going on. There's no need to worry about any of that. I have access to all of the individual results in the exact same scope my async function allowing for a lot of flexibility.

*/

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be non-negative");
      }
      resolve(a + b);
    }, 1000);
  });
};

const doWork = async () => {
  const sum = await add(1, 2);
  const sum2 = await add(sum, -9);
  const sum3 = await add(sum2, 2);
  return sum3;
};

doWork()
  .then((result) => {
    console.log("result:", result);
  })
  .catch((e) => {
    console.log("e", e);
  });
