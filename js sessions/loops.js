// fixed iteration : when you know how many times the loop will run

// for, while and Do While

// for : fixed iteration

// initialization
// condition
// update (increment / decrement)

// for (initialization ; condition ; update){
// code to be executed
// }

// for (var i = 0; i <= 1000; i += 100) {
//   console.log(i);
// }

// for (var i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// for (var i = 10; i >= 1; i -= 1) {
//   console.log(i);
// }

// for (var i = 50; i <= 90; i += 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//

// var txt = "hello world this is john doe";
// console.log(txt[0]);
// console.log(txt[1]);
// console.log(txt[2]);
// console.log(txt[3]);
// console.log(txt[4]);

// for (var i = 0; i < txt.length; i += 1) {
//   console.log(txt[i]);
// }

// ============================================================
// PRACTICE - 20 for loop tasks
// only things covered so far: for loop, if / else, %, prompt, parseInt,
// string length, txt[i], toLowerCase
// try writing the code yourself, no answers given
// ============================================================

// ---------- basic counting ----------

// 1. Print numbers from 1 to 20.

// 2. Print numbers from 20 down to 1.

// 3. Print all even numbers from 1 to 50.

// 4. Print all multiples of 5 from 5 to 100.

// 5. Print numbers from 100 down to 0 in steps of 10.

// ---------- with prompt ----------

// 6. Ask a number n with prompt(). Print numbers from 1 to n.

// 7. Ask a number n with prompt(). Print its multiplication table up to 10,
//    like "5 x 1 = 5".

// 8. Ask a number n with prompt(). Print the sum of all numbers from 1 to n.

// 9. Ask a number n with prompt(). Print its factorial (n x (n-1) x ... x 1).

// 10. Ask two numbers start and end with prompt(). Print every number
//     between them (including both).

// ---------- loop + if ----------

// 11. Print all numbers from 1 to 100 that are divisible by 3.

// 12. Print numbers from 1 to 30. For each, print "Fizz" if divisible by 3,
//     "Buzz" if divisible by 5, "FizzBuzz" if both, else the number itself.

// 13. Ask a number n with prompt(). Count and print how many even numbers
//     are there from 1 to n.

// 14. Ask a number n with prompt(). Print all its divisors (numbers from 1
//     to n that divide it exactly).

// 15. Ask a number n with prompt(). Print "Prime" or "Not prime"
//     (hint: count how many divisors it has between 1 and n).

// ---------- loop + strings ----------

// 16. Ask a word with prompt(). Print each character on a new line.

// 17. Ask a word with prompt(). Print its characters in reverse order,
//     one per line (hint: start i from length - 1 and go down to 0).

// 18. Ask a sentence with prompt(). Count and print how many vowels it has
//     (use toLowerCase() so capital vowels count too).

// 19. Ask a sentence with prompt(). Count and print how many spaces it has.

// 20. Ask a word with prompt(). Build the reversed word in a new string
//     variable and use if / else to print "Palindrome" or "Not a palindrome"
//     (e.g. "madam" is a palindrome).

// while loop fixed iteration

// var txt = "hello world my name is john doe";

// var total_spaces = 0;

// var i = 0;
// while (i < txt.length) {
//   if (txt[i] === " ") {
//     total_spaces += 1;
//   }
//   i += 1;
// }

// console.log(`'${txt}' has ${total_spaces} spaces`);

// var i = txt.length - 1; // last index
// while (i >= 0) {
//   console.log(txt[i]);
//   i -= 1;
// }

// while loop non-fixed iteration

// ask a user his name , keep on asking till he not enter a name of 3 or more character

// var myname = prompt("Enter name : ");
// while (myname.length < 3) {
//   alert("Invalid Name");
//   myname = prompt("Enter name : ");
// }
// alert(`Valid name : ${myname}`);

// var age = parseInt(prompt("Enter age : "));

// while (age < 18 || age > 25) {
//   age = parseInt(prompt("Enter age  (18-25) : "));
// }
// alert("Welcome to the club");

// =============================================================
// PRACTICE SET A - 20 while loop tasks (FIXED iteration)
// =============================================================
// Fixed iteration = you can tell, BEFORE the loop starts, how many times
// it will run (10 times, n times, once per character of a string ...).
//
// Every while loop needs these 4 parts - identify them for EVERY task:
//   1. INIT       : the counter variable and its starting value
//   2. CONDITION  : when should the loop keep running
//   3. BODY       : the work done in each round
//   4. UPDATE     : how the counter moves (forget this = infinite loop!)
//
// Rules: no arrays, no objects, no functions. Use prompt() for input,
// console.log() for output. Dry-run on paper with a small input first.
// Write the solution yourself - no copy-paste, no AI.
// =============================================================

// ---------- A1. Counting basics ----------

// A1. Print numbers 1 to 15, one per line.
//     Init: counter = 1. Condition: counter <= 15. Update: counter + 1.
//     Expected: 1, 2, 3 ... 15
//     Think: what happens if you write < instead of <= ? Try it and see.

// var i = 1;
// while (i <= 15) {
//   console.log(i);
//   i += 1;
// }

// A2. Print numbers from 30 down to 1.
//     Counter starts at the HIGH end and moves DOWN, so the condition and
//     the update both change compared to A1.
//     Expected: 30, 29, 28 ... 1
//     Think: what is the very last value printed, and why does the loop stop?

// var i = 30;
// while (i >= 1) {
//   console.log(i);
//   i -= 1;
// }

// A3. Print all odd numbers from 1 to 49.
//     Do it in TWO ways and compare: (a) counter jumps by 2 each time,
//     (b) counter moves by 1 and you print only when counter % 2 is not 0.
//     Expected: 1, 3, 5 ... 49
//     Think: which way runs fewer rounds? Which is easier to read?

// var i = 1;
// while (i <= 49) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i += 1;
// }

// A4. Print all multiples of 7 from 7 to 140.
//     Expected: 7, 14, 21 ... 140
//     Think: how many numbers will be printed? Work it out BEFORE running
//     (140 / 7), then count the output to confirm.

// A5. Print 0, 25, 50, 75, 100 using a loop (not 5 console.logs).
//     Choose the step size yourself and decide which comparison
//     (< or <=) makes 100 appear.
//     Think: change 100 to 110 - does your loop still behave sensibly?

// ---------- A2. Input driven counting ----------

// A6. Ask the user for a number n. Print 1 to n.
//     Steps: prompt -> convert to number (prompt gives a STRING) -> loop.
//     Example: n = 5 -> 1 2 3 4 5
//     Edge cases to test: n = 1, n = 0, n = -3. What should happen?
//     (a loop that never runs is perfectly valid - just verify it.)

// A7. Ask the user for a number n and print its table in the format:
//         n x 1 = n
//         n x 2 = 2n  ... up to n x 10
//     Example: n = 4 -> "4 x 1 = 4", "4 x 2 = 8" ... "4 x 10 = 40"
//     Use a template literal for the output line.
//     Think: the multiplier (1-10) is the loop counter, n never changes.

// A8. Ask the user for n. Print the sum of 1 + 2 + ... + n.
//     You need an ACCUMULATOR variable (starts at 0) outside the loop.
//     Each round: add the counter to it. Print ONLY after the loop ends.
//     Example: n = 5 -> 15      n = 100 -> 5050
//     Think: why does the accumulator start at 0 and not 1?

// A9. Ask the user for n. Print the sum of only the EVEN numbers from 1 to n.
//     Example: n = 10 -> 2 + 4 + 6 + 8 + 10 = 30
//     Decide: do you check each number with %, or jump the counter by 2?
//     Edge case: n = 1 should print 0.

// A10. Ask the user for n. Print its factorial (n x (n-1) x ... x 1).
//      Like A8 but the accumulator MULTIPLIES, so it must start at 1.
//      Example: n = 5 -> 120      n = 0 -> 1 (by definition)
//      Think: what is the biggest n before JavaScript prints a huge
//      number like 2.43e+18 or Infinity? Find it by experiment.

// A11. Ask the user for two numbers a and b. Print every number from a to b.
//      Example: a = 3, b = 8 -> 3 4 5 6 7 8
//      Think: what if the user gives a > b? Decide your behaviour
//      (print nothing / print downwards) and implement it with an if.

// A12. Ask for a and b (a < b). Count how many numbers from a to b
//      (both included) are divisible by 4 and print only the COUNT.
//      Example: a = 1, b = 20 -> 5 (4, 8, 12, 16, 20)
//      Pattern: counter variable + if inside the loop (a "counting" loop).

// A13. Print the squares of numbers 1 to 10 in the format "3 squared = 9".
//      Expected: 1 squared = 1 ... 10 squared = 100
//      Think: where is the multiplication done - in the update or the body?

// A14. Ask the user for n. Print the FIRST n multiples of 3.
//      Example: n = 4 -> 3 6 9 12
//      Careful: here the loop runs exactly n times, but the values printed
//      go up to 3n. Keep "how many times" and "which value" as two
//      separate ideas (hint: counter and counter * 3).

// ---------- A3. Strings, one character per round ----------
// Reminder: txt.length is the number of characters, txt[0] is the first
// one, txt[txt.length - 1] is the last one.

// A15. Ask for a word. Print every character with its index:
//          0 -> h
//          1 -> e ...
//      The counter doubles as the INDEX here. Check your last printed index
//      equals word.length - 1.

// A16. Ask for a word. Print its characters in REVERSE, one per line.
//      Counter starts at the last index and goes down to 0.
//      Think: why does the condition need >= 0 and not > 0?

// A17. Ask for a sentence. Count and print how many vowels it has
//      (a, e, i, o, u - upper and lower case).
//      Hint on approach: convert to one case first, then check each char.
//      Example: "Hello World" -> 3

// A18. Ask for a word. Build a NEW string in which every character is
//      repeated twice, then print it.
//      Example: "abc" -> "aabbcc"
//      Start with an empty string "" and keep joining to it each round.

// A19. Ask for a word AND a single character. Count how many times the
//      character appears in the word and print the count.
//      Example: "banana", "a" -> 3
//      Edge case: character not present -> 0. Upper vs lower case - decide
//      whether "A" should match "a" and handle it.

// A20. Ask for a word. Decide whether it is a palindrome using TWO indexes:
//      left starts at 0, right starts at the last index. Compare the two
//      characters, then move left forward and right backward.
//      Example: "madam" -> palindrome, "hello" -> not a palindrome
//      Think: when can the loop stop? (left and right meet or cross.)
//      Think: once one mismatch is found, do you need to keep looping?

// =============================================================
// PRACTICE SET B - 20 while loop tasks (NON-FIXED iteration)
// =============================================================
// Non-fixed iteration = you do NOT know how many times the loop runs.
// It depends on user input or on a value changing until a goal is met.
//
// Typical shapes - recognise which one each task is:
//   (i)   VALIDATION  : ask again while the answer is wrong
//   (ii)  SENTINEL    : keep reading values until a special "stop" value
//   (iii) SEARCH      : keep going until something is found
//   (iv)  CONVERGENCE : keep changing a number until it reaches a target
//
// Golden rule: the condition must be able to become false by something
// that happens INSIDE the loop (new input, changed variable).
// If your page hangs, you have an infinite loop - close the tab and
// re-check the UPDATE step.
// Rules: no arrays, objects or functions. No solutions given.
// =============================================================

// ---------- B1. Validation ----------

// B1. Keep asking for a password until the user types exactly "admin123".
//     Then print "Access granted".
//     Pattern: ask once BEFORE the loop, ask again INSIDE the loop.
//     Think: why must the first prompt happen before the while line?

// var password = prompt("Enter password : ");
// while (password !== "admin123") {
//   password = prompt("Enter password : ");
// }

// console.log("Access granted");

// B2. Keep asking for a number until the user enters a POSITIVE number.
//     Print "Positive number accepted: <number>".
//     Test with: 0, -5, 3. Is 0 positive? Make sure your condition agrees
//     with your answer.

// var n = parseInt(prompt("Enter a number : "));

// while (n <= 0) {
//   n = parseInt(prompt("Enter a number : "));
// }
// console.log("FOund a positive number", n);

// B3. Keep asking for a number until it is between 1 and 10 (inclusive).
//     Print a message like "Out of range, try again" on every wrong try.
//     Think: should the condition use && or || to describe "invalid"?

// ---------- B2. Sentinel loops ----------

// B4. Keep asking numbers and add them to a running total. Stop when the
//     user enters 0. Print the total.
//     Example inputs: 5, 10, 2, 0 -> total 17
//     Think: the 0 must NOT be treated as a normal number - or does it
//     matter here? Reason about why (adding 0 changes nothing).

// B5. Keep asking numbers until the user enters -1. Print HOW MANY
//     numbers were entered (not counting -1).
//     Example: 4, 8, 15, -1 -> 3
//     Careful: -1 must not be counted. Where do you increase the counter?

// B6. Keep asking numbers until -1. Print the AVERAGE of the numbers.
//     Needs two variables: total and count. Average = total / count.
//     Edge case: user enters -1 immediately. Dividing by zero gives NaN -
//     handle it with an if and print "No numbers entered".

// var total = 0;
// var count = 0;

// var n = parseInt(prompt("Enter number : "));
// while (n >= 0) {
//   total += n;
//   count += 1;

//   n = parseInt(prompt("Enter number : "));
// }

// console.log("total", total);
// console.log("count", count);
// console.log("average", total / count);

// B7. Keep asking numbers until -1. Print the LARGEST number entered.
//     Think: what should "largest so far" start as? Starting at 0 breaks
//     when every input is negative (e.g. -5, -2, then -1 to stop).
//     Pick the starting value carefully (hint: the first real number).

// B8. Keep asking numbers until -1. Print the SMALLEST number entered.
//     Same idea as B7, opposite direction. Do both B7 and B8 in a single
//     program so you track max and min together.

// B9. Keep asking numbers. Stop the moment the user enters an EVEN number.
//     Print how many ODD numbers were entered before it.
//     Example: 3, 7, 9, 4 -> 3
//     The stopping value is decided by a calculation (n % 2), not a fixed
//     number like 0 or -1.

// B10. Keep asking the user for words. Stop when the user types "stop"
//      in ANY case (STOP, Stop, sToP). Print how many words were typed
//      before it.
//      Hint: normalise the case before comparing (toLowerCase).

// ---------- B3. Digit and number manipulation ----------
// Two tools for this section:
//   n % 10        -> gives the LAST digit of n   (1234 % 10 = 4)
//   Math.floor(n / 10) -> removes the last digit (1234 -> 123)
// Repeat both until n becomes 0 - you do not know the digit count upfront,
// which is exactly why this is a non-fixed loop.

// B11. Ask for a number n. Count its digits WITHOUT using string length.
//      Example: 90210 -> 5
//      Edge case: what should 0 give? (a loop that runs while n > 0 would
//      give 0 digits - decide if you need to special-case it.)

// B12. Ask for n. Print the sum of its digits.
//      Example: 4821 -> 4 + 8 + 2 + 1 = 15
//      Trace on paper: write n, last digit, sum for every round.

// B13. Ask for n. Print its digits REVERSED as a number.
//      Example: 1234 -> 4321
//      Build the answer with: reversed = reversed * 10 + lastDigit.
//      Trace it on paper with 123 before coding to see why it works.

// B14. Ask for n. Print whether it is a palindrome number (121, 1331 ...).
//      Reuse B13: reverse it, then compare with the ORIGINAL.
//      Think: you change n inside the loop - keep a copy of the original
//      in another variable before you start.

// B15. Ask for n. Keep dividing it by 2 until it becomes less than 1.
//      Print the number of divisions needed. (n = 100 -> 7)
//      Print n after every division so you can watch it shrink.

// ---------- B4. Convergence and games ----------

// B16. Start with value = 1. Keep doubling it. Stop once it exceeds 10000.
//      Print each value and, at the end, how many doublings it took.
//      Expected last line like: "Crossed 10000 after 14 steps"
//      Think: is it > or >= for "crossed"? Does it change your answer here?

// B17. Ask for a starting amount and a yearly interest rate (in %).
//      Add the interest every year until the amount is at least DOUBLE the
//      start. Print the amount each year and the total years.
//      Example: 1000 at 10% -> year 1: 1100, year 2: 1210 ... answer 8 years.
//      Keep the ORIGINAL amount in its own variable to compare against.

var amount = parseInt(prompt("Enter amount"));
var interestRate = parseInt(prompt("Enter interest rate"));

var orignal_amount = amount;

var year = 0;

while (amount < orignal_amount * 2) {
  var interest = amount * (interestRate / 100);
  amount += interest;

  year += 1;
  console.log(`Year : ${year}\nAmount : ${amount}`);
}

console.log("Total Years : ", year);

// B18. Number guessing game. Store a secret number in a variable
//      (e.g. var secret = 7). Keep asking the user to guess. After each
//      wrong guess print "Too high" or "Too low". When correct, print
//      "Correct! You took X attempts".
//      Needs: an attempts counter that increases on every guess.
//      Bonus challenge (still while loop): limit the game to 5 attempts.
//      Then your loop has TWO reasons to stop - how do you express that?

// B19. Ask for two numbers a and b. Find their GCD using repeated
//      subtraction: while a and b are different, subtract the smaller from
//      the larger. When they become equal, that value is the GCD.
//      Example: 48 and 18 -> 12
//      Print a and b after every round to follow the process.
//      Edge case: zero or negative input would loop forever - guard it
//      with a validation loop (like B2) BEFORE this one.

// B20. Collatz sequence. Ask for a positive number n. Repeat until n is 1:
//        if n is even  -> n = n / 2
//        otherwise     -> n = 3 * n + 1
//      Print every value and the total number of steps.
//      Example: n = 6 -> 6 3 10 5 16 8 4 2 1  (8 steps)
//      Try n = 27 and see how long it gets.
//      Think: nobody has proven this always reaches 1 - what does that
//      say about this loop being truly "non-fixed"?
