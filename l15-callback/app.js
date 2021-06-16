/*
learn about callback. what happends if callback is not used when the server response is slower than the output

a callback function is nothing more than a function we provide as an
argument to another function with the intention of having it called later on.
*/

/*here we simulate a slow server response. the data output will be 'undefined' cos the data is outputted b4 the server response with the data*/
// const geocode = (address) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 248392,
//       longtitude: 2859723,
//     };
//     return data;
//   }, 2000);
// };
// const data = geocode("Singapore");
// console.log(data);

/*here we use callback to prevent this prob*/
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 248392,
      longtitude: 2859723,
    };
    callback(data);
  }, 2000);
};
geocode("Singapore", (data) => {
  console.log(data);
});

console.log(new Date());
