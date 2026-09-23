// CONTROL FLOW STATEMENTS - notes
// these decide the ORDER in which code runs - skip some lines, repeat some lines, etc.

// ---------- if ----------
// code inside runs only when the condition is true

// if (condition) {
//   code to run
// }

// var age = parseInt(prompt("Enter your age : "));
// if (age >= 18) console.log("Eligible");

// ---------- else ----------
// runs only when the if condition is false

// if (condition) {
//   runs when true
// } else {
//   runs when false
// }

// var age = parseInt(prompt("Enter your age : "));
// if (age >= 18) console.log("Eligible");
// else console.log("Not Eligible");

// ---------- else if ----------
// checks more conditions, one by one, top to bottom
// stops at the first true condition, skips the rest

// var dish = prompt("Enter dish");
// if (dish === "burger") console.log("I'll eat burger");
// else if (dish === "pizza") console.log("I'll eat pizza");
// else if (dish === "pasta") console.log("I'll eat pasta");
// else console.log("Aaj bhooka rhunga");

var today = parseInt(prompt("Enter a number (0-6) : "));

if (today === 0) console.log("Sunday");
else if (today === 1) console.log("Monday");
else if (today === 2) console.log("Tuesday");
else if (today === 3) console.log("Wednesday");
else if (today === 4) console.log("Thursday");
else if (today === 5) console.log("Friday");
else if (today === 6) console.log("Saturday");
else console.log("Invalid Choice");

// ---------- switch ----------
// alternative to many else-if, easier to read when checking ONE value
// against many fixed options

// switch (value) {
//   case option1:
//     code
//     break;   // break stops it from falling into the next case
//   default:
//     code when nothing matches
// }

var day = parseInt(prompt("Enter a number (0-6) : "));

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Choice");
}

// without break, code "falls through" into the next case too
var fruit = "apple";
switch (fruit) {
  case "apple":
  case "mango":
    console.log("This is a fruit"); // runs for both "apple" and "mango"
    break;
  default:
    console.log("Unknown");
}

// ---------- for loop ----------
// repeats code a fixed number of times
// for (start; condition; step) { code }

for (var i = 1; i <= 5; i++) {
  console.log(i); // prints 1 2 3 4 5
}

// ---------- while loop ----------
// repeats code AS LONG AS the condition stays true
// use when you don't know exactly how many times it will run

var n = 1;
while (n <= 5) {
  console.log(n);
  n++; // must update n, otherwise it loops forever
}

// ---------- do while loop ----------
// same as while, but runs the code ONCE FIRST, then checks the condition
// so it always runs at least one time, even if the condition is false

var m = 10;
do {
  console.log(m); // runs once even though 10 <= 5 is false
  m++;
} while (m <= 5);

// ---------- break ----------
// stops the loop completely, jumps out right away

for (var i = 1; i <= 10; i++) {
  if (i === 5) break; // stop as soon as i becomes 5
  console.log(i); // prints 1 2 3 4
}

// ---------- continue ----------
// skips only the CURRENT round, loop keeps going for the next value

for (var i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip printing 3, but loop continues
  console.log(i); // prints 1 2 4 5
}

// ============================================================
// PRACTICE - REAL LIFE PROBLEMS (strings and numbers only)
// ============================================================

// 1. Ask age with prompt(). Print "Eligible to vote" if 18 or above, else
//    print "Not eligible".

// 2. Ask a number with prompt(). Print "Positive", "Negative" or "Zero"
//    using if / else if / else.

// 3. Ask a number with prompt(). Print "Even" or "Odd" using if/else and %.

// 4. Ask marks (0-100) with prompt(). Print grade using else-if:
//    90+ "A", 75+ "B", 50+ "C", below 50 "Fail".

// 5. Ask a day number (1-7) with prompt(). Print the day name using switch,
//    and "Invalid day" for anything else.

// 6. Ask a month number (1-12) with prompt(). Print how many days that month
//    has using switch (remember Feb can be tricky, just assume 28).

// 7. Print all numbers from 1 to 20 using a for loop, but skip multiples of
//    3 using continue.

// 8. Print numbers from 1 to 50 using a while loop, but stop completely
//    (break) as soon as you reach a number greater than 30.

// 9. Ask the user to enter numbers one by one with prompt() inside a
//    do-while loop, keep adding them to a total, and stop when they type 0.
//    Print the final total.

// 10. Ask a word with prompt(). Use a for loop to go through the word
//     character by character (word[i]) and count how many vowels it has.

// 11. Ask a number with prompt(). Use a while loop to print its digits one
//     by one in reverse order (hint: use % 10 and Math.floor(num / 10)).

// 12. Ask a number with prompt(). Check if it is a prime number using a for
//     loop and break as soon as you find a factor.
