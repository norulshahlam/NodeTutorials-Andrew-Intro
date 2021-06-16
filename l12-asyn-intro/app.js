/*
Imagine requesting some data from an API. Depending upon the situation the server might take some time to process the request while blocking the main thread making the web page unresponsive.
That’s where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.

for this example, setTimeout runs last, after the rest of the done is done
*/

console.log("starting");

setTimeout(() => {
  console.log("2 sec timer");
}, 2000);

setTimeout(() => {
  console.log("0 sec timer");
}, 0);

console.log("stopping");
