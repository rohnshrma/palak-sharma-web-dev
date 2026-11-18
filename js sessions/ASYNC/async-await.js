// ============================================================
// ASYNC / AWAIT (built on top of Promises)
// ============================================================
// CONCEPT: async/await kya hota hai?
// async/await is a newer, cleaner way to write promise-based code so that it
// LOOKS like normal top-to-bottom (synchronous) code.
// It is "syntactic sugar" over promises — meaning behind the scenes it is
// still promises, just with nicer syntax. No new magic.
//
// Rules to remember:
//   1. "async" before a function  -> that function ALWAYS returns a promise.
//      (If it returns a plain value, JS wraps it in a resolved promise.)
//   2. "await" can be used inside an async function (it waits for a promise
//      to settle and gives us the final value, not the promise itself).
//   3. await pauses ONLY that async function. The rest of the program keeps
//      running — JS is not blocked.
//   4. Errors: if the awaited promise is rejected, await throws an error, so
//      we handle it with normal try / catch (instead of .catch()).
//
// Compare with promise.js:
//   .then(data => ...)  ==>  const data = await promise;
//   .catch(err => ...)  ==>  catch (err) { ... }
// ============================================================

// The API address (endpoint) that gives us a random single-line joke.
// NOTE: "const URL" is declared here, so don't load another file that also
// declares it on the same page (see index.html).
const URL = "https://v2.jokeapi.dev/joke/Programming,Spooky?type=single";

// Same promise-returning function we wrote in promise.js.
// url -> which address to call
function sendRequest(url) {
  // Return a promise (pending at first).
  return new Promise((resolve, reject) => {
    // Classic XMLHttpRequest object for AJAX.
    const request = new XMLHttpRequest();
    // Fires whenever readyState changes (4 = DONE).
    request.addEventListener("readystatechange", () => {
      // Success: DONE + status 200 -> fulfil the promise with the parsed object.
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }
      // Failure: DONE + status not 200 -> reject the promise with a message.
      if (request.readyState === 4 && request.status !== 200) {
        reject("Failed to fetch joke");
      }
    });
    // Prepare a GET request. We use the "url" parameter so the function
    // works for any address passed in.
    request.open("GET", url);

    // Send the request; the listener above settles the promise later.
    request.send();
  });
}

// ------------------------------------------------------------
// The same thing using .then / .catch (promise style) — kept for comparison.
// ------------------------------------------------------------
// sendRequest(URL)
//   .then((data) => console.log(data.joke))  // runs on success
//   .catch((err) => console.log(err));       // runs on failure

// ------------------------------------------------------------
// async/await style
// ------------------------------------------------------------
// "async" makes handleRequest return a promise automatically.
// The parameter is named URL (same as the global const); inside the function
// this parameter is used, which is fine — it just hides the outer one.
async function handleRequest(URL) {
  // try/catch: if anything inside "try" throws (including a rejected promise
  // that we await), JS jumps to "catch".
  try {
    // await pauses THIS function until the promise from sendRequest settles.
    // When it is fulfilled, "data" gets the resolved value (the joke object),
    // not a promise.
    const data = await sendRequest(URL);
    // Runs only after the data has arrived.
    console.log(data);
  } catch (err) {
    // Runs if the promise was rejected -> err is the rejection message.
    console.log(err);
  }
}

// IMPORTANT: these calls run in PARALLEL (at the same time).
// Each call starts its request immediately and only its own function waits at
// "await"; the next line of this file does not wait for the previous call.
// So all 9 requests are sent together, and the results arrive in ANY order
// (whichever response comes first is printed first).
// If we wanted them one after another, we would write "await handleRequest(URL)"
// inside another async function.
handleRequest(URL);
handleRequest(URL);
handleRequest(URL);
handleRequest(URL);
handleRequest(URL);
handleRequest(URL);
handleRequest(URL);
handleRequest(URL);
handleRequest(URL);
