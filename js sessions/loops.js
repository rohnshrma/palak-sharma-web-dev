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

var txt = "hello world my name is john doe";

var total_spaces = 0;

var i = 0;
while (i < txt.length) {
  if (txt[i] === " ") {
    total_spaces += 1;
  }
  i += 1;
}

console.log(`'${txt}' has ${total_spaces} spaces`);

var i = txt.length - 1; // last index
while (i >= 0) {
  console.log(txt[i]);
  i -= 1;
}

// while loop non-fixed iteration

// ask a user his name , keep on asking till he not enter a name of 3 or more character

// var myname = prompt("Enter name : ");
// while (myname.length < 3) {
//   alert("Invalid Name");
//   myname = prompt("Enter name : ");
// }
// alert(`Valid name : ${myname}`);

var age = parseInt(prompt("Enter age : "));

while (age < 18 || age > 25) {
  age = parseInt(prompt("Enter age  (18-25) : "));
}
alert("Welcome to the club");

// =============================================================
// PRACTICE - 20 while loop tasks (FIXED iteration)
// (you know in advance how many times the loop runs)
// No arrays, objects or functions. Solve on your own.
// =============================================================

// 1. Print numbers from 1 to 15.

// 2. Print numbers from 30 down to 1.

// 3. Print all odd numbers from 1 to 49.

// 4. Print all multiples of 7 from 7 to 140.

// 5. Print numbers from 0 to 100 in steps of 25.

// 6. Ask a number n with prompt(). Print numbers from 1 to n.

// 7. Ask a number n with prompt(). Print its table up to 10 in the format
//    "n x 1 = n".

// 8. Ask a number n with prompt(). Print the sum of numbers from 1 to n.

// 9. Ask a number n with prompt(). Print the sum of only the even numbers
//    from 1 to n.

// 10. Ask a number n with prompt(). Print its factorial.

// 11. Ask two numbers a and b with prompt(). Print every number from a to b.

// 12. Ask two numbers a and b (a < b) with prompt(). Print how many numbers
//     between a and b (inclusive) are divisible by 4.

// 13. Print the squares of numbers from 1 to 10 (1, 4, 9 ...).

// 14. Ask a number n with prompt(). Print the first n multiples of 3.

// 15. Ask a word with prompt(). Print each character with its index,
//     like "0 -> h".

// 16. Ask a word with prompt(). Print its characters in reverse order.

// 17. Ask a sentence with prompt(). Count and print how many vowels it has.

// 18. Ask a word with prompt(). Build a new string where every character is
//     repeated twice ("abc" -> "aabbcc") and print it.

// 19. Ask a word and a character with prompt(). Count how many times that
//     character appears in the word.

// 20. Ask a word with prompt(). Check whether it is a palindrome using two
//     indexes (one from start, one from end) and print the result.

// =============================================================
// PRACTICE - 20 while loop tasks (NON-FIXED iteration)
// (you do NOT know in advance how many times the loop runs -
//  it depends on the user or on a condition)
// No arrays, objects or functions. Solve on your own.
// =============================================================

// 1. Keep asking a password with prompt() until the user enters exactly
//    "admin123". Then print "Access granted".

// 2. Keep asking for a number until the user enters a positive number.

// 3. Keep asking for a number until the user enters a number between
//    1 and 10 (inclusive).

// 4. Keep asking numbers and adding them to a total. Stop when the user
//    enters 0. Print the total.

// 5. Keep asking numbers until the user enters -1. Print how many numbers
//    were entered (not counting -1).

// 6. Keep asking numbers until the user enters -1. Print the average of the
//    numbers entered.

// 7. Keep asking numbers until the user enters -1. Print the largest number
//    entered.

// 8. Keep asking numbers until the user enters -1. Print the smallest number
//    entered.

// 9. Keep asking a number. Stop as soon as the user enters an even number.
//    Print how many odd numbers were entered before it.

// 10. Ask a number n with prompt(). Keep dividing it by 2 until it becomes
//     less than 1. Print how many divisions it took.

// 11. Ask a number n with prompt(). Count and print how many digits it has
//     (use / and % style logic, not the string length).

// 12. Ask a number n with prompt(). Print the sum of its digits.

// 13. Ask a number n with prompt(). Print its digits reversed (1234 -> 4321).

// 14. Ask a number n with prompt(). Check whether it is a palindrome number
//     (121, 1331 ...) and print the result.

// 15. Start with 1 and keep doubling it. Stop when the value crosses 10000.
//     Print every value and how many steps it took.

// 16. Ask a starting amount and an interest rate with prompt(). Keep adding
//     the interest every year until the amount becomes double. Print how
//     many years it took.

// 17. Keep asking the user to guess a secret number (set it in a variable,
//     e.g. 7). Print "Too high" or "Too low" each time. Stop on a correct
//     guess and print the number of attempts.

// 18. Keep asking the user for a word. Stop when the user enters "stop"
//     (any case). Print how many words were entered.

// 19. Ask two numbers a and b with prompt(). Find their GCD by repeatedly
//     subtracting the smaller from the larger until both are equal.

// 20. Ask a number n with prompt(). Apply this rule until n becomes 1:
//     if n is even, n = n / 2, else n = 3 * n + 1. Print every value and
//     the number of steps taken (Collatz sequence).
