// ============================================================
// CALLBACKS + CALLBACK HELL (using XMLHttpRequest)
// ============================================================
// CONCEPT: Callback kya hota hai?
// A callback is simply a function that we pass to another function as an
// argument, so that the other function can "call it back" later — usually
// once some work (like fetching data from a server) is finished.
//
// Why do we need it? Because network requests are ASYNCHRONOUS — JavaScript
// does not wait for the server to reply. It moves ahead with the next lines,
// and when the reply finally comes, our callback is run with the result.
//
// CONVENTION used here: "error-first callback" (very common in Node.js).
//   callback(error, data)
//   -> if something went wrong : error has a value, data is null
//   -> if everything went fine : error is null,   data has the result
// ============================================================

// The API address (endpoint) we will hit to get a random joke.
// "Programming,Spooky" = joke categories, "type=single" = joke comes as one line
// (not as setup + delivery).
const URL = "https://v2.jokeapi.dev/joke/Programming,Spooky?type=single";

// A reusable function to send a GET request.
// url           -> which address to call
// resultHandler -> the CALLBACK function; we will call it once we have the answer
function sendRequest(url, resultHandler) {
  // Create a new XMLHttpRequest object — the old/classic way of doing AJAX
  // (talking to a server without reloading the page).
  const request = new XMLHttpRequest();

  // "readystatechange" event fires every time request.readyState changes.
  // readyState values: 0 = UNSENT, 1 = OPENED, 2 = HEADERS_RECEIVED,
  //                    3 = LOADING, 4 = DONE (response fully received)
  request.addEventListener("readystatechange", () => {
    // Success case: request is DONE (4) and server said OK (status 200)
    if (request.readyState === 4 && request.status === 200) {
      // responseText is a plain string, so JSON.parse() converts it into
      // a JS object. From that object we pick only the ".joke" property.
      // We call the callback with error = null and data = the joke.
      resultHandler(null, JSON.parse(request.responseText).joke);
    }

    // Failure case: request is DONE but status is not 200 (e.g. 404, 500)
    if (request.readyState === 4 && request.status !== 200) {
      // We call the callback with an error message and data = null.
      resultHandler("Failed to fetch", null);
    }
  });

  // Prepare the request: method "GET" and the address to call.
  // (We use the "url" parameter so the function works for any address passed in.)
  request.open("GET", url);

  // Actually send the request to the server. After this line JS does NOT wait —
  // the listener above will handle the response whenever it arrives.
  request.send();
}

// ------------------------------------------------------------
// SIMPLE USAGE — one request, one callback
// ------------------------------------------------------------
// sendRequest(URL, (err, data) => {
//   if (err) {
//     console.log("Error=>", err);   // something went wrong
//   } else {
//     console.log("Data =>", data);  // we got the joke
//   }
// });

// ------------------------------------------------------------
// CALLBACK HELL (also called "Pyramid of Doom")
// ------------------------------------------------------------
// Suppose we want 4 jokes ONE AFTER ANOTHER (2nd request only after the 1st
// finishes, and so on). With callbacks, the only way is to put the next
// request INSIDE the callback of the previous one.
// Result: code keeps shifting to the right like a pyramid, becomes hard to
// read, hard to debug and error handling gets repeated at every level.
// This exact problem is the reason PROMISES (and later async/await) were
// introduced — see fetch.js.

// 1st request
sendRequest(URL, (err, data) => {
  if (err) {
    console.log("Error=>", err);
  } else {
    console.log("Data =>", data); // 1st joke printed
    // 2nd request starts only after 1st one is successful
    sendRequest(URL, (err, data) => {
      if (err) {
        console.log("Error=>", err);
      } else {
        console.log("Data =>", data); // 2nd joke printed
        // 3rd request starts only after 2nd one is successful
        sendRequest(URL, (err, data) => {
          if (err) {
            console.log("Error=>", err);
          } else {
            console.log("Data =>", data); // 3rd joke printed
            // 4th request starts only after 3rd one is successful
            sendRequest(URL, (err, data) => {
              if (err) {
                console.log("Error=>", err);
              } else {
                console.log("Data =>", data); // 4th joke printed
              }
            });
          }
        });
      }
    });
  }
});
