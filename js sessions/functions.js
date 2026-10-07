// =============================================================
// FUNCTIONS
// =============================================================
// A function is a reusable block of code. Define it once, run it as
// many times as you want by calling its name with (). Code inside a
// function only runs when it's CALLED, not when it's defined.
//
// function name(parameters) {
//   // body - runs on every call
// }

function calcBmi() {
  // no parameters - this function asks for its own input with prompt()
  var weight = parseInt(prompt("Enter your weight in kg's"));
  var height = parseFloat(prompt("Enter your height in meter's")); // decimal, so parseFloat
  var bmi = weight / height ** 2; // ** = power (height squared)
  if (bmi < 18.5) console.log(`under weight as your bmi is ${bmi}`);
  else if (bmi >= 18.5 && bmi < 25)
    console.log(`normal weight as your bmi is ${bmi}`);
  else if (bmi >= 25 && bmi < 30)
    console.log(`over weight as your bmi is ${bmi}`);
  else console.log(`obese as your bmi is ${bmi}`);
  // no "return" - it just prints and finishes
}

// calcBmi();
// calcBmi();
// Each call runs the whole body again and asks for input again -
// nothing is remembered between calls.

// ---------------------------------------------------------------
// PARAMETERS vs ARGUMENTS
// ---------------------------------------------------------------
// parameters : placeholder names in the function definition (weight, height)
// arguments  : actual values given when calling it (100, 1.8)
// 1st argument fills 1st parameter, 2nd fills 2nd, etc - by position.

function bmiCalc(weight, height) {
  var bmi = weight / height ** 2;
  if (bmi < 18.5) console.log(`under weight as your bmi is ${bmi}`);
  else if (bmi >= 18.5 && bmi < 25)
    console.log(`normal weight as your bmi is ${bmi}`);
  else if (bmi >= 25 && bmi < 30)
    console.log(`over weight as your bmi is ${bmi}`);
  else console.log(`obese as your bmi is ${bmi}`);
}

bmiCalc(100, 1.8); // 100 -> weight, 1.8 -> height
bmiCalc(90, 1.72);
bmiCalc(100, 1.8);
bmiCalc(90, 1.72);
// Now the function reuses any numbers given to it - no prompt() needed.

// =============================================================
// RETURN
// =============================================================
// return does two things:
//   1. stops the function immediately
//   2. sends a value back out to wherever it was called from

function prints() {
  console.log("1");
  console.log("2");
  return 22; // function stops here
  console.log("3"); // never runs
  console.log("4"); // never runs
}
var x = prints(); // x = 22
console.log(x); // prints: 1, 2, 22

// =============================================================
// PRACTICE - 20 function / parameter / return tasks
// =============================================================
// No arrays, no objects. Write the function, then call it with the
// example inputs and check the output.

// ---------- basics ----------

// F1. Function greet, no parameters, prints "Hello there!". Call it 3 times.

// F2. Function greetUser(name) that prints `Hello, ${name}!`.
//     Call with 3 different names. Try calling with no argument too.

// F3. Function square(n) that PRINTS n * n. Call with 5, -3, 0.

// ---------- return vs print ----------

// F4. Function squareReturn(n) that RETURNS n * n instead of printing.
//     Store the result in a variable and print that variable.

// F5. Function add(a, b) that returns a + b. Call 3 times, print each result.

// F6. Function isEven(n) that returns true/false using:
//     return n % 2 === 0;
//     Call with 4, 7, 0.

// ---------- multiple parameters ----------

// F7. Function biggerOf(a, b) that returns the bigger one (if/else).
//     Test (3, 9), (20, 5), (6, 6).

// F8. Function average(a, b, c) that returns their average.
//     Test (10, 20, 30) -> 20.

// F9. Function isInRange(n, low, high) that returns true if n is
//     between low and high (inclusive). Test (5, 1, 10), (15, 1, 10).

// F10. Function maxOfThree(a, b, c) - returns the largest, no Math.max,
//      only if/else. Test (4, 9, 2), (9, 4, 2), (2, 4, 9).

// ---------- functions using a loop inside ----------

// F11. Function printTable(n) - uses a for loop to print n's table
//      (n x 1 to n x 10). Prints only, no return.

// F12. Function sumUpTo(n) - returns 1 + 2 + ... + n using a loop
//      inside. Call with 5 and 100.

// F13. Function countVowels(word) - returns how many vowels it has
//      (loop over word[i], use toLowerCase()). Test with 2-3 words.

// F14. Function isPalindrome(word) - returns true/false (two-index
//      comparison). Test "madam", "hello".

// F15. Function digitSum(n) - returns sum of its digits using
//      % 10 and Math.floor(n / 10) in a loop. Test 4821 -> 15.

// ---------- returning strings, calling one function from another ----------

// F16. Function celsiusToFahrenheit(c) returns c * 9/5 + 32.
//      Function fahrenheitToCelsius(f) returns (f - 32) * 5/9.
//      Call each with a few values and print the results.

// F17. Function isLeapYear(year) - returns true/false using:
//      divisible by 4 AND (not divisible by 100 OR divisible by 400).
//      Test 2000, 1900, 2024, 2023.

// F18. Function describeNumber(n) - returns "negative", "zero", or
//      "positive" (if/else, each branch returns a string directly,
//      no console.log inside). Test -5, 0, 8.

// F19. Function daysInMonth(month, year) - returns days in that month.
//      For February, CALL isLeapYear(year) from inside to pick 28/29.
//      Test (2, 2024) -> 29, (2, 2023) -> 28.

// F20. Function hasEarlyExit(n):
//      if n is negative, return "invalid" right away.
//      otherwise return `valid: ${n * n}`.
//      Test -4 -> "invalid", 6 -> "valid: 36".
