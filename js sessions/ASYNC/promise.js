// ============================================================
// PROMISES (creating our own promise + wrapping XMLHttpRequest)
// ============================================================
// CONCEPT: Promise kya hota hai?
// A Promise is an object that represents a value which is NOT available yet,
// but will be available in the future (or will fail).
// Think of it like ordering food online — you get an order ID (the promise)
// immediately, and the food (the actual data) arrives later.
//
// Because a promise is an object, it can be stored in a variable, passed to
// other functions or returned from a function — like any other value.
//
// A Promise is always in one of 3 states:
//   1. pending   -> work is still going on (we are still waiting)
//   2. fulfilled -> work finished successfully (we got the value)
//   3. rejected  -> work failed (we got an error)
// Once a promise moves from pending to fulfilled/rejected it is "settled"
// and its state can never change again.
//
// How do we create one?  new Promise((resolve, reject) => { ... })
//   resolve(value) -> call this when work is SUCCESSFUL  (promise -> fulfilled)
//   reject(error)  -> call this when work has FAILED     (promise -> rejected)
//
// How do we use one?
//   .then(callback)  -> runs when the promise is fulfilled
//   .catch(callback) -> runs when the promise is rejected
//   .then() returns a new promise, so we can chain many .then() calls in a
//   flat line instead of nesting callbacks inside callbacks.
//
// Why is this better than callbacks? In callback.js we had a "pyramid of
// doom" and checked "err" at every level. With promises the code stays flat
// and ONE .catch() at the end handles errors of the whole chain.
//
// In this file we also see how to WRAP the old XMLHttpRequest (which only
// knows callbacks/events) inside a Promise, so that it becomes promise-friendly.
// ============================================================

// ------------------------------------------------------------
// EXAMPLE 1 — Our own promise using setTimeout
// ------------------------------------------------------------
// (The line below is a leftover note: a promise can be stored in a variable
// or returned by a function — that is exactly what ageChecker does.)
// stored in a variable or returned by a function

// ageChecker takes an age and RETURNS A PROMISE.
function ageChecker(age) {
  // Create the promise. JS gives us two functions: resolve and reject.
  return new Promise((resolve, reject) => {
    // setTimeout pretends that the work takes time (5000 ms = 5 seconds),
    // like waiting for a server. So for 5 seconds the promise stays "pending".
    setTimeout(() => {
      // Ternary operator: if age is 18 or more -> resolve (success),
      // otherwise -> reject (failure). We pass a message with each.
      age >= 18 ? resolve("Eligible") : reject("Not Eligible");
    }, 5000);
  });
}

// Call ageChecker with 12. After 5 seconds the promise is rejected because 12 < 18.
ageChecker(12)
  // .then() runs only if the promise is fulfilled (resolve was called).
  // "data" is whatever we passed to resolve(). (Not run here, since 12 < 18.)
  .then((data) => console.log("Data", data))
  // .catch() runs if the promise is rejected (reject was called).
  // "err" is whatever we passed to reject(), so "Error Not Eligible" is printed.
  .catch((err) => console.log("Error", err));

// ------------------------------------------------------------
// EXAMPLE 2 — Wrapping XMLHttpRequest in a Promise
// ------------------------------------------------------------

// The API address (endpoint) that gives us a random single-line joke.
// NOTE: "const URL" is declared here, so don't load another file that also
// declares it on the same page (see index.html).
const URL = "https://v2.jokeapi.dev/joke/Programming,Spooky?type=single";

// Same job as sendRequest in callback.js, but now there is NO callback
// parameter. Instead the function RETURNS A PROMISE.
// url -> which address to call
function sendRequest(url) {
  // Wrap everything in a Promise and return it straight away (state: pending).
  return new Promise((resolve, reject) => {
    // Create the classic XMLHttpRequest object (old way of doing AJAX).
    const request = new XMLHttpRequest();

    // "readystatechange" fires every time request.readyState changes.
    // readyState 4 = DONE (response fully received).
    request.addEventListener("readystatechange", () => {
      // Success: request is DONE and server said OK (status 200).
      if (request.readyState === 4 && request.status === 200) {
        // JSON.parse converts the response text into a JS object.
        // resolve(...) marks the promise as fulfilled and hands this object
        // to the next .then().
        resolve(JSON.parse(request.responseText));
      }
      // Failure: request is DONE but status is not 200 (e.g. 404, 500).
      if (request.readyState === 4 && request.status !== 200) {
        // reject(...) marks the promise as rejected; the message goes to .catch().
        reject("Failed to fetch joke");
      }
    });

    // Prepare the request: method "GET" and the address to call.
    // (We use the "url" parameter so the function works for any address passed in.)
    request.open("GET", url);

    // Send the request. JS does NOT wait here; the listener above will
    // resolve or reject the promise whenever the response arrives.
    request.send();
  });
}

// Use the promise: call sendRequest and attach .then / .catch.
sendRequest(URL)
  // Runs when the promise is resolved. "data" is the parsed JS object;
  // we print only its ".joke" property.
  .then((data) => console.log(data.joke))
  // Runs if the promise is rejected, e.g. "Failed to fetch joke".
  .catch((err) => console.log(err));
