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

// var amount = parseInt(prompt("Enter amount"));
// var interestRate = parseInt(prompt("Enter interest rate"));

// var orignal_amount = amount;

// var year = 0;

// while (amount < orignal_amount * 2) {
//   var interest = amount * (interestRate / 100);
//   amount += interest;

//   year += 1;
//   console.log(`Year : ${year}\nAmount : ${amount}`);
// }

// console.log("Total Years : ", year);

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

// =============================================================
// DO WHILE LOOP
// =============================================================
// A do-while loop looks almost like a while loop, but the BODY runs
// FIRST and the CONDITION is checked AFTER, at the bottom.
//
//   do {
//     // code - this runs at least once, no matter what
//   } while (condition);   <- semicolon is required here, easy to forget
//
// Because the check happens at the end, a do-while ALWAYS executes its
// body at least one time, even if the condition is false from the very
// start. A plain "while" checks BEFORE running, so it can skip the body
// completely (zero times) if the condition starts out false.
//
// This is the ONLY real difference between while and do-while:
//   while      -> check first, maybe run 0 times
//   do-while   -> run first, check after, runs at least 1 time
//
// When to reach for do-while: anytime the task is naturally
// "do something, THEN decide whether to repeat" - a menu that must be
// shown once before the user can choose, a prompt that must ask at
// least once, a game round that always plays once before "play again?".

// var i = 10;
//
// do {
//   console.log(i);     // line A: runs the body
//   i += 1;              // line B: update, runs every round, same as while
// } while (i < 10);       // line C: condition checked AFTER line A and B
//
// Trace this exactly, round by round:
//   i is 10 before the loop starts.
//   ROUND 1: body runs (line A prints 10, line B makes i = 11).
//            THEN condition is checked: is 11 < 10 ? No -> loop stops.
//   Only "10" is ever printed, even though 10 < 10 is false and a
//   normal while(i < 10) would have printed NOTHING at all.
// Think: change the condition to "i < 15" and trace again on paper
// before running it - how many lines print now, and what are they?

// ---------- break ----------
// break means: stop the loop RIGHT NOW, don't finish this round, don't
// run any more rounds. Control jumps straight to the first line AFTER
// the loop's closing brace }. It works inside for, while, AND do-while.

// for (var i = 1; i <= 10; i += 1) {
//   if (i == 5) {
//     console.log("Over");   // line A
//     break;                  // line B: loop ends here, forever
//   }
//   console.log(i);           // line C
// }
//
// Trace:
//   i=1: line C prints 1 (the if was false, so A/B never ran)
//   i=2: prints 2
//   i=3: prints 3
//   i=4: prints 4
//   i=5: the if is now true -> line A prints "Over" -> line B (break)
//        stops the ENTIRE loop immediately.
// Notice the for loop's own update step (i += 1) never gets a chance
// to run after break - break exits before the loop machinery continues.
// i never becomes 6, 7, 8... they are simply never visited.
// Final output, in order: 1  2  3  4  Over            (nothing after)

// ---------- break inside an infinite loop ----------
// while (true) is a condition that is ALWAYS true, so normally this
// loop would run forever. The only way to escape it is a break
// somewhere inside the body. This is a very common pattern: "keep
// looping until something happens, then break" - useful when the exact
// stop condition is easier to check AFTER getting input, rather than
// writing it directly in the while(...) line.

// var pass = "admin123";
//
// while (true) {
//   var guess = prompt("Enter password : ");
//
//   if (guess === pass) {
//     console.log("Logged In");
//     break;                       // the ONLY exit from this loop
//   }
//   console.log("Invalid Password");
// }
// Think: what would happen if the break were accidentally deleted?
// (Answer: the loop would keep asking for a password forever, even
// after the correct one is typed, because nothing ever stops it.)
// Compare this to B1 in Set B, which solved the exact same problem
// using a condition in the while(...) line instead of while(true)+break.
// Both are correct - this is just a different, equally valid, shape.

// ---------- continue ----------
// continue means: stop THIS round right here, but do NOT exit the
// loop - skip straight to the next round instead.
//   - in a for loop: continue jumps to the UPDATE step (i += 1), then
//     the condition is checked, then the body runs again if still true.
//   - in a while / do-while loop: continue jumps straight back up to
//     the CONDITION line. There is no separate "update step" built into
//     while/do-while, so if your update (like i += 1) is written AFTER
//     where continue fires, that update gets skipped too - a classic
//     cause of accidental infinite loops. Always double check that the
//     update already happened before a continue in a while loop, or
//     move the update to the very top of the body.

// var secret = Math.floor(Math.random() * 100) + 1;
//   Math.random()        -> random decimal, 0 up to (not including) 1
//   Math.random() * 100  -> scales it to 0 up to (not including) 100
//   Math.floor(...)      -> chops off the decimal part -> whole number 0-99
//   + 1                  -> shifts the range to 1-100 inclusive
//
// while (true) {
//   var guess = parseInt(prompt("Enter your guess (1-100) :"));
//
//   if (guess < 0 || guess > 100) {
//     alert("Invalid Guess!");
//     continue;              // skip everything below, re-loop immediately
//   }
//
//   if (guess < secret) {
//     alert("Too Low! Try high");
//   } else if (guess > secret) {
//     alert("Too High! Try low");
//   } else {
//     alert(`Congratulations! you've guessed the correct number : ${secret}`);
//     break;                  // correct guess - exit for good
//   }
// }
// Think: without that continue, an out-of-range guess like 500 would
// fall straight into "guess < secret" (500 is NOT less than secret, so
// it would wrongly say "Too High! Try low" for garbage input). continue
// protects the rest of the logic from ever seeing an invalid guess.
// Also notice: there is no counter/update in this particular loop, so
// the "update before continue" warning above does not apply here - but
// it WILL apply to several of your own tasks below, so watch for it.

// =============================================================
// PRACTICE SET C - 10 do-while loop tasks
// =============================================================
// Point of every task here: prove to yourself, with real input, that
// the body runs at least once even when the condition would have been
// false the whole time. Where it matters, a task will ask you to
// compare against the while-loop version you'd normally write.
// Rules: no arrays, objects or functions. No solutions given.
// =============================================================

// C1. Print numbers 1 to 10 using a do-while loop instead of a while
//     loop (compare with A1). Expected: 1 2 3 ... 10
//     Think: which 3 lines changed compared to the while version, and
//     which 2 lines stayed exactly the same?

// C2. Ask the user for a number with prompt() and print it. Using
//     do-while, keep asking and printing UNTIL the number entered is
//     greater than 0.
//     Example: entered -5, -2, 0, 7 -> all four get printed, loop then
//     stops because 7 > 0.
//     Think: because it's a do-while, the FIRST number is printed no
//     matter what it is. Would a plain while loop print it too? Why
//     or why not?

// C3. Simulate a tiny menu. Using do-while: print "1. Say hi  2. Exit",
//     then ask the user to type 1 or 2. If they type 1, print "hi" and
//     loop again (show the menu again). If they type 2, print "Bye"
//     and stop.
//     Think: the menu text has to appear at least once before the user
//     can even choose anything - that is exactly why do-while fits
//     here better than a condition-first while.

// C4. Rewrite B1 (password check, from Set B) using do-while instead of
//     while. Keep asking while the password is NOT "letmein", print
//     "Welcome" once it matches.
//     Think: B1's while version needed the FIRST prompt written twice
//     (once before the loop, once inside it). Does your do-while
//     version still need that, or does do-while remove the duplication?

// C5. Ask for a number n with prompt(). Using a do-while loop, print
//     its multiplication table from n x 1 to n x 10 (same format as A7).
//     Think: a multiplication table always runs exactly 10 times no
//     matter what n is - is do-while really the best fit here, or would
//     a plain for loop be more natural? Write your answer as a comment.

// C6. Hardcode var secret = 42. Using do-while, ask the user to guess
//     the number. After every wrong guess print "Try again". Stop and
//     print "You got it!" once the guess is correct.

// C7. Roll a "dice" with var roll = Math.floor(Math.random() * 6) + 1;
//     Using do-while, print each roll, and stop once you roll a 6.
//     Count and print how many rolls it took.
//     Think: why does this task NEED the body to run at least once
//     (hint: before the first roll, you have no idea whether it will
//     be a 6 or not - you can't check a condition you haven't computed
//     yet).

// C8. Ask the user for a number. Using do-while, repeatedly print it
//     and then replace it with Math.floor(n / 2), stopping once it
//     reaches 0. Confirm on paper: if the user enters 0 right away,
//     how many lines print, and what do they say?

// C9. Using do-while, ask "Do you want to continue? (yes/no)" and keep
//     looping while the answer is "yes". Each round also ask for a
//     number and print its square before asking the continue question.
//     Example flow: yes -> enter 4 -> prints 16 -> continue? yes ->
//     enter 5 -> prints 25 -> continue? no -> loop stops.

// C10. Rewrite B17 (compound interest, from Set B) as a do-while loop
//      instead of while. Keep the same logic (add interest every year
//      until the amount is at least double the original). Think about
//      whether the condition could realistically be false on the very
//      FIRST check with normal inputs (positive amount, positive rate)
//      - does switching to do-while change the output at all here?

// =============================================================
// PRACTICE SET D - 12 break tasks (for, while, and do-while)
// =============================================================
// Point of every task: use break to exit a loop the INSTANT something
// is true, instead of letting it run to its natural end. After each
// task, check: did the loop actually stop early, or did it just happen
// to reach the end anyway?
// Rules: no arrays, objects or functions. No solutions given.
// =============================================================

// D1. Using a for loop from 1 to 100, print each number - but break
//     completely the moment you reach a number divisible by 13. That
//     number should be the LAST thing printed.

// D2. Using a for loop (i from 1 to 20), ask the user for a number each
//     round and print "Got it". If the user ever types 0, break
//     immediately and print "Stopped early at round <i>". If 0 is
//     never typed in all 20 rounds, print "Completed all rounds" AFTER
//     the loop ends normally.
//     Think: how do you tell, after the loop, whether break actually
//     ran or not? (Hint: a flag variable set only right before break.)

// D3. Using while (true), keep asking the user for numbers and adding
//     each one to a running total. The moment the total crosses 100,
//     break and print the final total plus how many numbers were
//     entered.
//     Think: compare this to B4/B5 - there the stop value was a fixed
//     sentinel like 0 or -1 checked in the while(...) line. Here the
//     stop condition depends on the TOTAL, which you can only check
//     mid-round - that is exactly when break is more natural than a
//     condition in the while line.

// D4. Using a for loop, search for the FIRST number between 1 and 2000
//     that is divisible by both 6 and 7. Break the instant you find it
//     and print that number. Do not use any formula - just loop and
//     check with %.

// D5. Using a do-while loop, keep asking the user for a word. Break out
//     as soon as a word longer than 8 characters is entered, then print
//     that word together with its length.

// D6. Using a for loop from 1 to 60, print every number, but break
//     completely the SECOND time (not the first) you encounter a
//     multiple of 9. You will need your own counter variable tracking
//     "how many multiples of 9 have I seen so far" to know when to
//     break on the second one specifically.

// D7. Using while (true), ask the user for numbers one at a time. Break
//     the moment a NEGATIVE number is entered, and print the sum of
//     only the positive numbers that were entered before it.

// D8. Hardcode var pin = "4455". Using a for loop that allows at most 3
//     attempts (i from 1 to 3), ask for the PIN each round. If it
//     matches, print "Card accepted" and break. If all 3 rounds finish
//     with no match, print "Card blocked" - and think carefully about
//     WHERE that line needs to be written (inside the loop? right after
//     it?) so it only prints when break never happened.

// D9. Ask the user for a single number n with prompt(). Using a for
//     loop with i from 2 up to n - 1, check whether i divides n evenly;
//     the instant it does, print "Not prime" and break. If the loop
//     finishes all the way with no divisor ever found, print "Prime"
//     right after the loop (not inside it).
//     Think: for a large n, roughly how many rounds does break save you
//     compared to always checking every single i up to n - 1?

// D10. Using while (true), keep asking the user for numbers, remembering
//      the PREVIOUS number in another variable. Break the moment the
//      SAME number is entered twice in a row, and print
//      "Repeated number detected: <n>".
//      Edge case: what should happen on the very first number entered,
//      when there is no "previous" yet to compare against?

// D11. Using do-while, roll a dice (1-6) repeatedly and print each roll.
//      Keep a counter that increases only when you roll a 6 (not every
//      roll). Break and print "Rolled three 6s in total!" the instant
//      that counter reaches 3 - the three 6s do NOT need to be in a row.

// D12. Rewrite B18 (number guessing game, from Set B) using while(true)
//      with break instead of a condition written in the while(...)
//      line. Keep the attempts counter and the "Too high / Too low"
//      messages exactly as before. Write a one-line comment giving your
//      honest opinion: is the while(true)+break version easier or
//      harder to read than the condition-based while version?

// =============================================================
// PRACTICE SET E - 12 continue tasks (for, while, and do-while)
// =============================================================
// Point of every task: use continue to SKIP a round without stopping
// the whole loop. In every while/do-while task below, double-check
// that your counter/update variable is updated BEFORE the continue
// line runs for that round - otherwise the loop may never move past
// the value that gets skipped, and it will hang forever.
// Rules: no arrays, objects or functions. No solutions given.
// =============================================================

// E1. Using a for loop from 1 to 30, print every number EXCEPT
//     multiples of 4 - skip them with continue instead of wrapping the
//     console.log in an if/else.

// E2. Using a for loop of 10 rounds, ask the user for a number each
//     round. If the number is negative, print "Skipping invalid entry"
//     and continue (do not add it to anything). Otherwise add it to a
//     running total. Print the total once the loop ends.

// E3. Using a while loop with a counter from 1 to 50, print only the
//     numbers that are NEITHER divisible by 3 NOR divisible by 5 - use
//     continue to skip the ones that are.
//     Think: write the counter's update (i += 1) as the very FIRST line
//     of the body, before any if/continue - explain in a comment why
//     that order matters for a while loop specifically (for loops don't
//     have this problem, because their update step runs automatically).

// E4. Using a for loop of 10 rounds, ask the user for a word each
//     round. If the word is exactly "skip", print nothing and continue
//     to the next round. Otherwise print the word together with its
//     length.

// E5. Using a for loop from 1 to 100, skip (continue) every number
//     whose last digit is 0 (check with % 10). Print all the others.
//     Expected start of output: 1 2 3 4 5 6 7 8 9  (10 and 20 are
//     skipped, 11 appears next, and so on).

// E6. Using a do-while loop, ask the user for numbers until you have
//     collected 8 of them (track your own counter). If a number is 0,
//     print "Zero ignored" and continue WITHOUT letting it count toward
//     the 8 - so entering a 0 should not use up one of your 8 slots,
//     you simply ask again.
//     Think: where exactly does your round-counter increase, relative
//     to the continue line? Get this wrong and you'll either count the
//     zero or loop forever.

// E7. Ask the user for one line of text (a sentence). Using a for loop
//     (i from 0 to length - 1), walk through each character. Use
//     continue to skip spaces, and count only the non-space characters.
//     Print the final count.

// E8. Using while (true), keep asking the user for numbers. If
//     parseInt(...) on the input produces NaN (check with
//     Number.isNaN(n)), print "Not a number, try again" and continue
//     immediately WITHOUT counting that attempt. Break when the user
//     enters -1, and print how many VALID numbers were entered in
//     total (not counting the NaN attempts or the -1 itself).

// E9. Using a for loop from 1 to 40, continue (skip printing) every
//     number divisible by 6 - but BEFORE the continue runs, increment a
//     separate counter that tracks "how many multiples of 6 were
//     skipped". Print that counter after the loop ends.

// E10. Using a for loop from 1 to 20, print "Odd" or "Even" for every
//      number EXCEPT numbers divisible by 5, which should be skipped
//      entirely with continue (nothing at all should print for them -
//      not "Odd", not "Even", nothing).

// E11. Ask the user for a word. Using a for loop over its characters,
//      use continue to skip vowels (a, e, i, o, u, both upper and lower
//      case - use toLowerCase() to simplify the check) and build a new
//      string containing only the consonants. Print that new string
//      after the loop finishes.

// E12. Combine continue AND break in one for loop running i from 1 to
//      100: continue past (skip) every number divisible by 2, but break
//      completely the moment you reach a number greater than 50 that is
//      divisible by 7. Print every number that actually gets printed,
//      plus make the final printed line clearly show the stopping
//      number.
//      Think: trace by hand which numbers get silently skipped by
//      continue versus the ONE number that finally triggers break -
//      write both lists out on paper before running your code.
