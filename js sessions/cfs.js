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
// var today = parseInt(prompt("Enter a number (0-6) : "));
// // today is now a number, ready to compare using ===

// if (today === 0) console.log("Sunday");
// // checked first - if true, everything below is skipped entirely
// else if (today === 1) console.log("Monday");
// // only checked if today was NOT 0
// else if (today === 2) console.log("Tuesday");
// else if (today === 3) console.log("Wednesday");
// else if (today === 4) console.log("Thursday");
// else if (today === 5) console.log("Friday");
// else if (today === 6) console.log("Saturday");
// else console.log("Invalid Choice");
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

// nested if else

//

// var age = parseInt(prompt("Enter age : "));
// var voterId = prompt("Do you have a Voter ID :").toLowerCase();

// if (age >= 18) {
//   if (voterId[0] === "y") {
//     console.log("You can vote");
//   } else {
//     console.log("Apply for Voter ID");
//   }
// } else {
//   console.log("Not Eligible to Vote");
// }

// switch statment

// var today = parseInt(prompt("Enter number (0-6) :"));

// switch (today) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid Date");
//     break;
// }

// 1 - 4 : free
// 5 - 10 : 100
// 11 - 14 : 200
// 15 - : 500
// switch

// var age = parseInt(prompt("Enter age : "));

// switch (age) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("Free");
//     break;
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log("100");
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//     console.log("200");
//     break;
//   default:
//     console.log("500");
//     break;
// }

// 90-100: A
// 80-90: B
// 70-80: C
// 60-70: D
// < 60 : Fail

// var marks = parseInt(prompt("Enter marks :"));
// switch (true) {
//   case marks > 90 && marks <= 100:
//     console.log("A");
//     break;
//   case marks > 80 && marks <= 90:
//     console.log("B");
//     break;
//   case marks > 70 && marks <= 80:
//     console.log("C");
//     break;
//   case marks > 60 && marks <= 70:
//     console.log("D");
//     break;

//   case marks >= 0 && marks <= 60:
//     console.log("Fail");
//     break;

//   default:
//     console.log("Invalid Marks");
//     break;
// }

// ============================================================
// PRACTICE SET 2 - if / else if / else / nested if / switch (20 tasks)
// only things covered above: prompt, parseInt, comparisons, &&, %, toLowerCase, [0]
// try writing the code yourself, no answers given
// ============================================================

// ---------- if / else if / else ----------

// 1. Ask a number with prompt(). Print "Divisible by 5" if it is, else
//    "Not divisible by 5".

// 2. Ask a number with prompt(). Print "Divisible by both 3 and 5",
//    "Divisible by 3 only", "Divisible by 5 only" or "Divisible by neither".

// 3. Ask a person's age with prompt(). Print "Can drive" if 18 or above,
//    else print how many years are left, e.g. "Wait 3 more years".

// 4. Ask a shopping bill amount with prompt(). Give 10% discount if bill is
//    above 1000, 5% if above 500, else no discount. Print the final amount.

// 5. Ask the units of electricity used with prompt(). Up to 100 units = 5 per
//    unit, above 100 = 8 per unit. Print the total bill.

// 6. Ask three angles of a triangle with prompt(). Print "Valid triangle" if
//    they add up to 180 and each is above 0, else "Invalid".

// 7. Ask three side lengths with prompt(). Print "Equilateral" (all equal),
//    "Isosceles" (any two equal) or "Scalene" (none equal).

// 8. Ask a number with prompt(). Print "Positive even", "Positive odd",
//    "Negative even", "Negative odd" or "Zero".

// 9. Ask a character with prompt(). Print "Uppercase" if it is a capital
//    letter, "Lowercase" if small (hint: compare with "a" and "z" after
//    checking; you can use >= and <= on letters).

// 10. Ask the hour of the day (0-23) with prompt(). Print "Good morning"
//     before 12, "Good afternoon" before 17, "Good evening" before 21,
//     else "Good night".

// ---------- nested if ----------

// 11. Ask age and whether the person has a driving licence ("yes"/"no").
//     If age is 18+, check the licence: print "Can drive" or "Get a licence
//     first". If under 18, print "Too young to drive".
//     (use toLowerCase() and [0] like the voter example)

// 12. Ask a username first. If it matches the stored one, then ask the
//     password. Print "Welcome" if both match, "Wrong password" if only the
//     username matched, and "User not found" otherwise.

// 13. Ask a number with prompt(). If it is positive, check whether it is even
//     or odd and print. If it is not positive, print "Not a positive number".

// 14. Ask marks (0-100) with prompt(). First check if marks are valid
//     (0 to 100). If valid, print "Pass" or "Fail" (pass mark 40). If not
//     valid, print "Invalid marks".

// ---------- switch ----------

// 15. Ask a number 1-12 with prompt(). Use switch to print the month name.
//     Print "Invalid month" in default.

// 16. Ask a number 1-12 with prompt(). Use switch with shared cases to print
//     how many days the month has (ignore leap year): 31, 30 or 28.

// 17. Ask a number 1-4 with prompt(). Use switch to print the season name or
//     "Invalid" in default (make up your own mapping).

// 18. Ask two numbers and an operator (+, -, *, /) with prompt(). Use switch
//     on the operator to print the result. Default: "Invalid operator".

// 19. Ask a single letter with prompt(). Use switch with shared cases
//     (a, e, i, o, u) to print "Vowel", default prints "Consonant".
//     (use toLowerCase() first so "A" also works)

// 20. Ask a percentage with prompt(). Use switch (true) to print
//     "Distinction" for 75+, "First class" for 60-74, "Second class" for
//     50-59, "Pass" for 40-49, "Fail" below 40.
