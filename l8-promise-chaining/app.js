/*
In this lesson, you’ll explore promise chaining. Promise chaining is a syntax that allows you
to chain together multiple asynchronous tasks in a specific order
*/

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be non-negative");
      }

      resolve(a + b);
    }, 2000);
  });
};
/* The problem is that the more asynchronous tasks we try to perform the more nested and complex our code */

// add(1, 2)
//   .then((sum) => {
//     console.log(sum);

//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

/* There's a better way to get it done using something called Promise chaining. */

add(1, 2)
  .then((sum) => {
    console.log(sum); // Will print 3
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2); // Will print 7
  })
  .catch((e) => {
    console.log(e);
  });
