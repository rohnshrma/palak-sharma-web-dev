// =============================================================
// FUNCTIONS - concept and line-by-line notes
// =============================================================
// A function is a reusable block of code that you write ONCE and can
// run ("call") as many times as you want, from anywhere in the file,
// just by writing its name followed by parentheses: functionName().
// The code INSIDE a function does NOT run when the function is defined
// - it only runs the moment you CALL it. Defining is like writing a
// recipe; calling is actually cooking it.
//
// Syntax:
//   function name(parameters) {
//     // body - the code that runs on every call
//   }
//
// - "function" is the keyword that starts a function declaration.
// - "name" is the function's identifier - same naming rules as a
//   variable (no spaces, can't start with a number, etc.).
// - "(parameters)" is a comma-separated list of PLACEHOLDER variables
//   that the function expects to receive values for. A function can
//   have zero, one, or many parameters.
// - "{ }" wraps the BODY - everything inside only exists and only runs
//   while that one call is happening.

function calcBmi() {
  // this function takes ZERO parameters - every piece of data it needs
  // (weight, height) is asked for with prompt() INSIDE the function body
  var weight = parseInt(prompt("Enter your weight in kg's"));
  // prompt() always returns a STRING, even if the user types "70" -
  // parseInt() converts that string into a whole number so math works
  var height = parseFloat(prompt("Enter your height in meter's"));
  // parseFloat() is used here (not parseInt) because height is usually
  // a decimal like 1.75 - parseInt would chop it down to 1 and ruin the
  // calculation
  var bmi = weight / height ** 2;
  // ** is the exponent operator: height ** 2 means height squared.
  // Standard BMI formula: weight (kg) / height (m) squared
  if (bmi < 18.5) console.log(`under weight as your bmi is ${bmi}`);
  else if (bmi >= 18.5 && bmi < 25)
    console.log(`normal weight as your bmi is ${bmi}`);
  else if (bmi >= 25 && bmi < 30)
    console.log(`over weight as your bmi is ${bmi}`);
  else console.log(`obese as your bmi is ${bmi}`);
  // notice: this function does NOT use the word "return" anywhere.
  // It just prints its own answer with console.log and finishes.
  // Calling it does not give you back a usable value - it only has a
  // SIDE EFFECT (printing to the console).
}

// calcBmi();
// calcBmi();
// Every call above runs the ENTIRE body again from the top: it asks
// for weight and height AGAIN, each time, because weight and height
// are LOCAL variables - they are created fresh on every call and
// destroyed when the call ends. Nothing is remembered between calls.
// Think: why is asking twice with prompt() inside the function not
// very reusable if you already know the numbers in your code? That
// question is exactly what parameters solve next.

// ---------------------------------------------------------------
// PARAMETERS vs ARGUMENTS
// ---------------------------------------------------------------
// parameters : the empty placeholder variable NAMES written inside the
//              parentheses when you DEFINE the function (weight, height
//              below). They don't hold any value until the function is
//              actually called.
// arguments  : the ACTUAL values you type inside the parentheses when
//              you CALL the function (100, 1.8 below). The first
//              argument fills the first parameter, the second argument
//              fills the second parameter, and so on, strictly by
//              POSITION (not by name).

function bmiCalc(weight, height) {
  // weight and height are parameters here - empty boxes waiting to be
  // filled in by whoever calls this function
  var bmi = weight / height ** 2;
  if (bmi < 18.5) console.log(`under weight as your bmi is ${bmi}`);
  else if (bmi >= 18.5 && bmi < 25)
    console.log(`normal weight as your bmi is ${bmi}`);
  else if (bmi >= 25 && bmi < 30)
    console.log(`over weight as your bmi is ${bmi}`);
  else console.log(`obese as your bmi is ${bmi}`);
}

bmiCalc(100, 1.8);
// here, 100 and 1.8 are ARGUMENTS. 100 fills the "weight" parameter,
// 1.8 fills the "height" parameter, purely because of their POSITION
// (first argument -> first parameter, second argument -> second
// parameter) - the names "weight"/"height" used inside bmiCalc's body
// have no connection at all to any variable named weight/height
// outside the function.
bmiCalc(90, 1.72);
bmiCalc(100, 1.8);
bmiCalc(90, 1.72);
// Compare this to calcBmi() above: now the function no longer needs to
// prompt() for input itself - the CALLER decides what data to feed it,
// and the same function can be reused instantly for any pair of
// numbers without typing anything into a popup.
// Think: what gets printed if you call bmiCalc(100) with only ONE
// argument? (Try it: the missing "height" parameter becomes
// undefined, and undefined ** 2 is NaN, which poisons the whole bmi
// calculation - this is why matching the number of arguments to
// parameters matters.)

// =============================================================
// RETURN
// =============================================================
// return does two things, always together:
//   1. It immediately TERMINATES (stops) the function - nothing written
//      after a return in the same execution path will ever run.
//   2. It PASSES A VALUE out of the function, back to wherever the
//      function was called from, so that value can be stored or used.
// A function that never uses "return" still finishes and gives back a
// value - that value is always "undefined" (see F2's "Think" prompt
// below for how to witness this yourself).

function prints() {
  console.log("1");
  console.log("2");
  return 22; // function terminated - execution stops on this exact line
  console.log("3"); // DEAD CODE - this line can NEVER run, ever
  console.log("4"); // DEAD CODE - same here
}
var x = prints();
// calling prints() runs line "1", then "2", then hits "return 22" -
// at that exact moment the function stops completely and hands the
// value 22 back out. That returned value 22 is what gets stored into x.
// "3" and "4" are never printed, under any circumstance, because the
// function already ended two lines earlier.
console.log(x);
// prints: 1 \n 2 \n 22   - three separate console.log calls total:
// two from INSIDE prints() while it was running, and one out HERE,
// printing the value that came back out of the function (x, which is 22).

// =============================================================
// PRACTICE - 20 function / parameter / return tasks
// =============================================================
// Only things covered so far: function declarations, parameters,
// arguments, return, if/else, loops (for/while/do-while from
// loops.js), template literals, %, parseInt/parseFloat, string length
// and txt[i], toLowerCase.
// Rules: no arrays, no objects (not even in disguise - no .push, no
// {} literals). Write every solution yourself - no copy-paste, no AI.
// For every task: write the function FIRST, then call it with the
// example inputs given, and check the output matches.
// =============================================================

// ---------- basics: defining and calling ----------

// F1. Write a function named greet that takes NO parameters and simply
//     console.log's "Hello there!". Call it 3 times in a row.
//     Think: does calling it 3 times print the greeting 3 times, or
//     only once? Why?

// F2. Write a function named greetUser that takes ONE parameter, name,
//     and prints `Hello, ${name}!`. Call it with 3 different names.
//     Think: what happens if you call greetUser() with NO argument at
//     all? Run it and read exactly what gets printed in place of the
//     name - that word IS the value JavaScript gives an unfilled
//     parameter.

// F3. Write a function square that takes a number parameter n and
//     PRINTS its square (n * n) with console.log - no return yet.
//     Call it with 5, -3, and 0.

// ---------- return vs print ----------

// F4. Now write a SECOND function, squareReturn, that takes n and
//     RETURNS n * n instead of printing it. Call it, store the result
//     in a variable, and console.log that variable.
//     Think: write one sentence comparing square (F3) and
//     squareReturn (F4) - which one lets you use the answer in a later
//     calculation, and which one only lets you see it on screen?

// F5. Write a function add that takes two parameters, a and b, and
//     returns their sum. Call it three times with three different
//     pairs of numbers, printing each result.

// F6. Write a function isEven that takes one parameter n and returns
//     true if it is even, false if it is odd - using a single line:
//     return n % 2 === 0;  (no if/else needed for this one).
//     Call it with 4, 7, and 0, printing each returned value.

// ---------- multiple parameters, if/else inside ----------

// F7. Write a function biggerOf that takes two parameters, a and b,
//     and returns whichever one is bigger (use if/else). Test with
//     (3, 9), (20, 5), and (6, 6) - decide yourself what to return when
//     they're equal, and write a comment explaining your choice.

// F8. Write a function average that takes THREE number parameters and
//     returns their average. Call it with (10, 20, 30) - the result
//     should be 20 - and with (5, 5, 5).

// F9. Write a function isInRange that takes three parameters: n, low,
//     high. It returns true if n is between low and high (inclusive),
//     false otherwise. Test with (5, 1, 10) and (15, 1, 10).

// F10. Write a function maxOfThree that takes three number parameters
//      and returns the largest, WITHOUT using Math.max - only if/else
//      comparisons. Test with (4, 9, 2), (9, 4, 2), (2, 4, 9).

// ---------- functions that use a loop inside their body ----------

// F11. Write a function printTable that takes ONE parameter n and,
//      using a for loop INSIDE the function, prints the multiplication
//      table of n from n x 1 to n x 10 (reuse your loops.js skills).
//      This function returns nothing - it only prints. Call it with
//      2 different numbers.

// F12. Write a function sumUpTo that takes one parameter n and
//      RETURNS the sum 1 + 2 + ... + n, calculated with a loop inside
//      the function (same idea as loops.js task A8, but now wrapped in
//      a reusable function with a return). Call it with 5 and with 100,
//      printing both returned results.

// F13. Write a function countVowels that takes one STRING parameter,
//      word, and returns how many vowels it contains (loop over
//      word[i] with a for loop, check against a, e, i, o, u in both
//      cases using toLowerCase()). Call it with 2 or 3 different words
//      and print each returned count.

// F14. Write a function isPalindrome that takes one string parameter
//      and RETURNS true or false depending on whether it reads the
//      same forwards and backwards (reuse the two-index idea from
//      loops.js task A20, but return a boolean here instead of
//      printing a message). Test with "madam" and "hello".

// F15. Write a function digitSum that takes one number parameter n and
//      returns the sum of its digits, using a loop with % 10 and
//      Math.floor(n / 10) inside the function (reuse loops.js task
//      B12's logic). Test with 4821 (should return 15) and with 7.

// ---------- returning strings, combining functions ----------

// F16. Write two functions: celsiusToFahrenheit(c) which returns
//      c * 9/5 + 32, and fahrenheitToCelsius(f) which returns
//      (f - 32) * 5/9. Call each with a few sample values and print
//      the results. Then try calling fahrenheitToCelsius on the OUTPUT
//      of celsiusToFahrenheit(100) - you should get back 100 (roughly).

// F17. Write a function isLeapYear that takes a year parameter and
//      returns true/false using the rule: divisible by 4 AND (NOT
//      divisible by 100 OR divisible by 400). Test with 2000 (true),
//      1900 (false), 2024 (true), 2023 (false).

// F18. Write a function describeNumber that takes one number parameter
//      and RETURNS a string describing it: "negative", "zero", or
//      "positive" - using if / else if / else, where EVERY branch
//      returns a different string directly (no console.log anywhere
//      inside this function). Call it with -5, 0, and 8, printing each
//      returned string from OUTSIDE the function.

// F19. Write a function daysInMonth that takes a month number (1-12)
//      and a year, and returns how many days that month has. Use an
//      if/else if chain for the 12 months; for February, CALL your
//      F17 isLeapYear function from INSIDE this one to decide between
//      28 and 29. Test (2, 2024) -> 29 and (2, 2023) -> 28.
//      Think: this is a function calling ANOTHER function you already
//      wrote - the inner function's return value is used directly
//      inside the outer function's own logic.

// F20. Write a function hasEarlyExit that takes a number parameter n.
//      If n is negative, return the string "invalid" IMMEDIATELY -
//      nothing below that return should ever run for a negative n
//      (this is called a "guard clause": checking for a bad case first
//      and exiting early, before the main logic). Otherwise, continue
//      past that check and return the string "valid: " + the square
//      of n, using a template literal, e.g. `valid: 36`.
//      Test with -4 (expect "invalid") and with 6 (expect "valid: 36").
//      Think: this is the exact same idea as the "prints" function
//      above, where "3" and "4" could never run after return - here,
//      an early return means the "valid: ..." line can never run for a
//      negative n, on purpose.
