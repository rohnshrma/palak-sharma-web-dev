// =====================================================================
//  HOW TO PLAY A SOUND IN JAVASCRIPT  —  new Audio() + audio.play()
//  (All code below is commented out. Uncomment it to try it out.)
// =====================================================================

// ---------------------------------------------------------------------
// 1) Create an Audio object
// ---------------------------------------------------------------------
// `Audio` is a built-in constructor in the browser (just like `Date`).
// `new Audio("path")` creates an audio player object and loads the file
// at that path. The path is relative to index.html.
// Creating it does NOT play it yet; it only gets the sound ready.

// var audio = new Audio("./sounds/crash.mp3");

// ---------------------------------------------------------------------
// 2) Play it
// ---------------------------------------------------------------------
// .play() is a method on the Audio object. It starts playing the sound.

// audio.play();

// NOTE: browsers block sound until the user has interacted with the page
// (a click or a key press). That's why we play sounds inside event
// listeners rather than as soon as the page loads.

// ---------------------------------------------------------------------
// 3) Play a sound when a button is clicked
// ---------------------------------------------------------------------
// document.querySelector(".w")      -> selects the first element with class "w" (the crash drum)
// .addEventListener("click", fn)    -> runs fn every time that button is clicked
// Inside fn we create a NEW Audio each time, so fast clicks can overlap
// (if we reused one Audio object, it would have to finish before playing again).

// document.querySelector(".w").addEventListener("click", function () {
//   var crash = new Audio("./sounds/crash.mp3");
//   crash.play();
// });

// ---------------------------------------------------------------------
// 4) Useful extras on an Audio object
// ---------------------------------------------------------------------
// var kick = new Audio("./sounds/kick-bass.mp3");
// kick.volume = 0.5;      // volume from 0 (silent) to 1 (full)
// kick.currentTime = 0;   // jump back to the start (in seconds)
// kick.pause();           // pause the sound
// kick.loop = true;       // keep repeating when it reaches the end

// ---------------------------------------------------------------------
// Sounds available in the /sounds folder (and which drum uses each):
//   w -> crash.mp3      a -> kick-bass.mp3   s -> snare.mp3
//   d -> tom-1.mp3      j -> tom-2.mp3       k -> tom-3.mp3
//   l -> tom-4.mp3
// ---------------------------------------------------------------------
