// =====================================================================
// XMLHttpRequest (XHR) / AJAX
// =====================================================================
// CONCEPT : Many times our web page needs data which is kept on some
//           other computer (a server) - for example jokes, weather,
//           cricket score. To get that data, our page sends a
//           "request" to the server and the server sends back a
//           "response".
// AJAX    : Asynchronous JavaScript And XML. It means getting data
//           from the server in the background, without reloading
//           the full page.
// XHR     : XMLHttpRequest is the built-in browser object which is
//           used for sending such requests. It is the old way
//           (the newer way is fetch), but it shows clearly how a
//           request works step by step.
// ASYNC   : The server takes some time to reply. JavaScript does not
//           sit and wait for it. It moves ahead with the next lines,
//           and when the reply comes, our function gets called.
// Note    : XMLHttpRequest is available in the browser only. So this
//           file has to be run through an HTML page, not directly
//           with node.

// XMLHttpRequest / AJAX

// The address of the server from where we want the data.
// Such an address is called an "API endpoint".
// Breaking the URL into parts :
//   https://v2.jokeapi.dev  -> the server (JokeAPI)
//   /joke                   -> we are asking for a joke
//   /Programming,Spooky     -> joke categories that we want
//   ?type=single            -> query parameter, means "give a one-line joke"
// "const" is used because this address is not going to change.
const URL = "https://v2.jokeapi.dev/joke/Programming,Spooky?type=single";

// XMLHttpRequest is a built-in class given by the browser.
// "new" creates one object from it, just like we created objects
// from our own classes. This "request" object has all the properties
// and methods needed for talking to the server.
// At this point nothing is sent. The request is only created.
const request = new XMLHttpRequest();

// addEventListener means "keep watching for this event, and whenever
// it happens, run this function".
//   1st argument : event name -> "readystatechange"
//   2nd argument : callback function (arrow function) -> code to run
// "readystatechange" event fires every time the stage of the request
// changes. A request passes through stages 0 to 4 (list is given at the
// bottom of this file), so this function runs multiple times, not once.
request.addEventListener("readystatechange", () => {
  // This commented line was for checking the values at every stage :
  //   request.responseText -> data sent by the server, as a string
  //   request.status       -> HTTP status code sent by the server
  //   request.readyState   -> current stage number of the request (0 to 4)
  //   console.log(request.responseText, request.status, request.readyState);

  // We want the data only when BOTH conditions are true :
  //   readyState === 4 -> request is fully complete, whole response has come
  //   status === 200   -> server is saying "OK, everything went fine"
  // && is the AND operator, so both sides must be true.
  // === checks the value as well as the data type.
  if (request.readyState === 4 && request.status === 200) {
    // Prints the joke data. It comes as a JSON string (text which looks
    // like an object). To use it as a real object we have to convert
    // it with JSON.parse(request.responseText).
    console.log(request.responseText);
  }
  // Second case : request is complete (4) but status is NOT 200.
  // !== means "not equal to". So the server replied, but with a problem.
  // Common status codes :
  //   200 -> OK (success)
  //   404 -> Not Found (wrong address)
  //   500 -> Server Error (problem on the server side)
  if (request.readyState === 4 && request.status !== 200) {
    // Showing a simple message so we know that something went wrong.
    console.log("Failed to fetch joke");
  }
});

// open() prepares the request. It is still not sent.
//   1st argument : HTTP method. "GET" means we want to get / read data.
//                  (Other methods : POST - send new data, PUT - update,
//                   DELETE - remove.)
//   2nd argument : the address where the request has to go.
// After this line readyState becomes 1.
request.open("GET", URL);

// send() actually sends the request to the server.
// This is asynchronous - JavaScript does not stop and wait here.
// When the server replies, the readystatechange function written
// above gets called.
request.send();

// ORDER OF WRITING : the listener is added first, and after that open()
// and send() are called. This way the listener is ready before the
// request starts, so we do not miss any stage change.

// ---------------------------------------------------------------------
// readyState VALUES : the 5 stages of a request
// ---------------------------------------------------------------------
// 0 : UNSENT                -> request object is created, open() is not called yet
// 1 : OPEN FUNCTION CALLED  -> open() is called, request is ready to go
// 2 : SEND FUNCTION CALLED  -> send() is called, server has received the request
// 3 : DOWNLOADING           -> response is coming, data is partly received
// 4 : COMPLETE              -> full response is received, now we can use the data
