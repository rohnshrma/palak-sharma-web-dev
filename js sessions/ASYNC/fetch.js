// ============================================================
// PROMISE HANDLING (using fetch)
// ============================================================
// CONCEPT: Promise kya hota hai?
// A Promise is an object that represents a value which is NOT available yet,
// but will be available in the future (or will fail).
// Think of it like ordering food online — you get an order ID (the promise)
// immediately, and the food (the actual data) arrives later.
//
// A Promise is always in one of 3 states:
//   1. pending   -> work is still going on (waiting for server)
//   2. fulfilled -> work finished successfully (we got the value)
//   3. rejected  -> work failed (we got an error)
//
// We handle a promise using:
//   .then(callback)  -> runs when the promise is fulfilled
//   .catch(callback) -> runs when the promise is rejected (any error in chain)
//
// fetch() is the modern, built-in replacement for XMLHttpRequest.
// It RETURNS A PROMISE, so no nested callbacks are needed — we just chain
// .then() calls one after another. This solves the "callback hell" problem
// we saw in callback.js.
// ============================================================

// The API address (endpoint) that gives us a random single-line joke.
const URL = "https://v2.jokeapi.dev/joke/Programming,Spooky?type=single";

// fetch(URL) sends a GET request and immediately returns a Promise (pending).
fetch(URL)
  // 1st .then(): runs when the server responds.
  // "response" is a Response object (status, headers, body etc.), the body
  // is NOT yet readable as a JS object.
  .then((response) => {
    // response.json() reads the body and converts JSON text into a JS object.
    // It ALSO returns a promise, so we "return" it — the next .then() will
    // receive its final result.
    return response.json();
  })
  // 2nd .then(): receives the parsed JS object from response.json().
  // Here we simply print the complete data object in the console.
  .then((data) => console.log(data))
  // .catch(): runs if ANY step above fails — e.g. no internet, wrong URL,
  // or invalid JSON. One .catch() handles errors for the whole chain,
  // unlike callbacks where we had to check "err" at every level.
  // NOTE: fetch does NOT reject on HTTP errors like 404/500 — it rejects
  // only on network failure. To treat 404 as an error, check response.ok.
  .catch((error) => {
    console.log(error); // print the error so we know what went wrong
  });
