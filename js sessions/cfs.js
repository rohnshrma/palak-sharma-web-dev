// CONTROL FLOW STATEMENTS - notes
// normally JS runs code line by line, top to bottom
// control flow statements let us change that - skip lines, or pick one path over another

// ---------- if ----------
// checks a condition. if it's true, the code inside the block runs
// if it's false, the block is skipped completely, nothing inside it runs

// if (condition) {
//   code to run
// }

// the condition is anything that gives a true/false answer
// (comparisons like >=, ===, or just a truthy/falsy value)

// var age = parseInt(prompt("Enter your age : "));
// parseInt converts the text from prompt into a whole number, so we can compare it

// if (age >= 18) console.log("Eligible");
// no curly braces here - if the if body is just ONE line, braces are optional
// but only that one line belongs to the if, anything after it runs regardless

// ---------- else ----------
// pairs with an if. runs ONLY when the if condition was false
// an if can exist without else, but an else can never exist without an if before it

// if (condition) {
//   runs when condition is true
// } else {
//   runs when condition is false
// }
// only ONE of the two blocks ever runs, never both

// var age = parseInt(prompt("Enter your age : "));
// if (age >= 18) console.log("Eligible");
// else console.log("Not Eligible");

// ---------- else if ----------
// used when there are MORE than 2 possible outcomes
// JS checks each condition top to bottom, in order
// as soon as ONE condition is true, that block runs and ALL the rest are skipped
// (even if a later condition would also have been true)
// if none of the conditions are true, the final "else" runs as a fallback

// var dish = prompt("Enter dish");
// === is used instead of == so both the VALUE and the TYPE must match exactly
// if (dish === "burger") console.log("I'll eat burger");
// else if (dish === "pizza") console.log("I'll eat pizza");
// else if (dish === "pasta") console.log("I'll eat pasta");
// else console.log("Aaj bhooka rhunga"); // runs if none of the dishes above matched

// real working example: number to day-of-week converter
var today = parseInt(prompt("Enter a number (0-6) : "));
// today is now a number, ready to compare using ===

if (today === 0) console.log("Sunday");
// checked first - if true, everything below is skipped entirely
else if (today === 1) console.log("Monday");
// only checked if today was NOT 0
else if (today === 2) console.log("Tuesday");
else if (today === 3) console.log("Wednesday");
else if (today === 4) console.log("Thursday");
else if (today === 5) console.log("Friday");
else if (today === 6) console.log("Saturday");
else console.log("Invalid Choice");
// final safety net - catches anything that isn't 0 to 6, like 9, -1, or text

// ============================================================
// PRACTICE - REAL LIFE PROBLEMS (strings and numbers only, no arrays/objects)
// try writing the code yourself, no answers given
// ============================================================

// 1. Ask age with prompt(). Print "Eligible to vote" if 18 or above, else
//    print "Not eligible".

// 2. Ask a number with prompt(). Print "Positive", "Negative" or "Zero"
//    using if / else if / else.

// 3. Ask a number with prompt(). Print "Even" or "Odd" using if/else and %.

// 4. Ask marks (0-100) with prompt(). Print grade using else-if:
//    90+ "A", 75+ "B", 50+ "C", below 50 "Fail".

// 5. Ask two numbers with prompt(). Print which one is bigger, or if they
//    are equal.

// 6. Ask a year with prompt(). Print "Leap year" or "Not a leap year"
//    (hint: divisible by 4, but not by 100 unless also by 400).

// 7. Ask a single character with prompt(). Print "Vowel" or "Consonant"
//    using if / else if.

// 8. Ask three numbers with prompt(). Print the largest of the three using
//    if / else if / else.

// 9. Ask temperature in Celsius with prompt(). Print "Hot" if above 30,
//    "Warm" if above 20, else "Cold".

// 10. Ask a username and password with prompt(). Print "Login successful"
//     only if both match the correct stored values, else "Login failed".

// 11. Ask a number with prompt(). Print "Single digit" if it's between
//     -9 and 9, otherwise print "Multiple digits".

// 12. Ask for someone's age with prompt(). Print "Child" if below 13,
//     "Teenager" if below 20, "Adult" if below 60, else "Senior citizen".
