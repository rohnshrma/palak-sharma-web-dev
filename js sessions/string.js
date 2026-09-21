// ============================================================
// JAVASCRIPT STRINGS - simple notes with examples
// Lines starting with // are comments. The computer ignores them.
// They are only for us humans to read and understand.
// ============================================================

// how to check the data type of a value
// "data type" means what kind of thing a value is (number, text, true/false etc.)
// typeof keyword
// typeof tells us the type of any value we put after it

// The lines below are "commented out" (they have // in front), so they will NOT run.
// Remove the // to run them and see the answer in the console.

// console.log(typeof 123);      // 123 is a whole number, so it prints "number"
// console.log(typeof 1.23);     // 1.23 has a decimal point, but it is still "number"
// console.log(typeof "1.23");   // it is inside quotes, so it is text -> "string"
// console.log(typeof null);     // this prints "object". It is a famous old mistake in JavaScript
// console.log(typeof undefined);// a variable with no value given -> "undefined"
// console.log(typeof true);     // true / false values are called "boolean"

// string
// a string is just text.
// a sequence of characters (alphabets, numbers, special symbols and whitespace) enclosed in single ' ', double " " quotes and backticks ` `
// (a "sequence" means the characters come one after another in a fixed order)
// (whitespace means empty spaces, tabs or new lines)

// note :  value taken as an input using the prompt method is of type "string" by default
// prompt() opens a small box in the browser and asks the user to type something
// whatever the user types, even if it is 25, comes back as text "25" and not the number 25
// but can be converted into a supported data type
// (so if we need to do maths with it, we must change it into a number first)

// var yourName = prompt("Enter your name : ");  // show a box, save what user types in yourName
// console.log(yourName, typeof yourName);       // print the text and its type (it will be "string")

// Number() changes the text into a number. Works for whole and decimal numbers
// var age = Number(prompt("Enter your age : "))
// parseInt() changes the text into a whole number only (it cuts off the decimal part)
// var age = parseInt(prompt("Enter your age : "))
// parseFloat() changes the text into a number with decimals
// var height = parseFloat(prompt("Enter your height : "))
// console.log(age, typeof age);                 // now the type will be "number"

// concatenation
// concatenation is a big word that just means "joining"
// adding two or more string together using the "+" operator
// when "+" is used between texts, it does not add maths, it glues them side by side

// ask the user for name, city and age and keep each answer in a variable
// var fName = prompt("Enter name :");
// var city = prompt("Enter city :");
// var age = parseInt(prompt("Enter age :"));

// join all the pieces into one sentence
// notice the spaces inside the quotes, like "my name is " - without them the words would stick together
// console.log(
//   "my name is " +
//     fName +
//     " and i live in " +
//     city +
//     " and i am " +
//     age +
//     " years old"
// );

// template literal / string literal
// this is an easier way to join text and variables
// ` ` backticks are used to create a string where
// values, variables and expressions are injected in ${}
// (injected = put inside. Whatever is written inside ${} is worked out and its answer is placed in the text)
// (backtick key is on the top left of the keyboard, below Esc, next to number 1)

// console.log(`My name is ${fName} and i am ${age} years old living in ${city}`);

// string + int = string
// if one side of "+" is text, JavaScript turns the other side into text too and then joins them

// impo for interview
// (impo = important. Interviewers love asking these)

// console.log(12 + 12);      // both are numbers, so normal maths -> 24
// console.log(12 + "12");    // one is text, so joining happens -> "1212"
// console.log("12" + "12");  // both are text, so joining happens -> "1212"
// console.log(+"12" + 12);   // the + in front of "12" turns it into a number 12, then maths -> 24
// console.log(+"12");        // just converts the text "12" into the number 12
// console.log(-"12" + 12);   // the - in front makes it number -12, then -12 + 12 -> 0

// indexing
// index means the position number of a character inside the text
// counting starting from 0 used to access character of a string
// (computers start counting from 0 and not from 1)

// h e l l o
// 1 2 3 4 5 : normal counting (for length)   -> how many characters are there (5)
// 0 1 2 3 4 : positive indexing (L -> R)     -> position numbers from the left side
// -5 -4 -3 -2 -1 : negative indexing (R -> L) -> position numbers from the right side, last character is -1

// [ ] are used to use indexing
// example: word[0] gives the character at position 0
// first character is always on the 0th position
// last character is always on the [string.length - 1] = th position
// (length is the total count of characters, and since we start from 0, the last position is one less than length)

// make a variable txt and store a sentence in it
// spaces between words also count as characters
var txt = "hello world this is john";

// txt[0] is the first character, so it prints "h"
console.log(txt[0]);
// txt.length is 24, so txt[24 - 1] is txt[23], the last character, so it prints "n"
console.log(txt[txt.length - 1]);

// string methods
// a method is a ready-made tool that JavaScript gives us to work on a string
// we use it by writing the string, a dot, then the method name and brackets ()
// important: methods do NOT change the original string, they give back a new one
// so we must save the result in a variable or print it

// return an uppercase version of string
// make all letters CAPITAL and save the result in the variable "up"
var up = txt.toUpperCase();
// prints "HELLO WORLD THIS IS JOHN"
console.log(up);

// return an lowercase version of string
// make all letters small again. prints "hello world this is john"
console.log(up.toLowerCase());

// return the character on the index specified (positive and negative)
// at(0) gives the first character -> "H"
console.log(up.at(0));
// at(-1) counts from the right side, so it gives the last character -> "N"
console.log(up.at(-1));

// return the character on the index specified (positive)
// charAt(0) gives the first character -> "H"
console.log(up.charAt(0));
// charAt does not understand negative numbers, so it gives an empty text "" (nothing is shown)
console.log(up.charAt(-1));

// replace first occurances of old , with a new string
// occurance = a time when something appears in the text
// replace("o", "x") changes only the FIRST "o" it finds -> "hellx world this is john"
console.log(txt.replace("o", "x"));
// /o/g is a regular expression. The "g" means global, which means "do it everywhere"
// so every "o" changes -> "hellx wxrld this is jxhn"
console.log(txt.replace(/o/g, "x"));

// replace all occurances of old , with a new string
// replaceAll changes every "o" with "x" without needing the /g trick -> "hellx wxrld this is jxhn"
console.log(txt.replaceAll("o", "x"));

// return true if the string contains a substring, else false
// substring = a small piece of the bigger text
// there is no "a" anywhere in our text, so it prints false
console.log(txt.includes("a"));
// there is an "o" in "hello", so it prints true
console.log(txt.includes("o"));

// returns index of the first occurance of the substring provided
// (if the substring is not found, it returns -1)
// the first "o" is in "hello" at position 4, so it prints 4
console.log(txt.indexOf("o")); // substring
// start looking from position 5 onwards, so it skips the "o" in "hello" and finds the one in "world" -> 7
console.log(txt.indexOf("o", 5)); // substring ,  start position (inclusive)
// (inclusive means that position is also checked)

// returns index of the last occurance of the substring provided
// it looks from the back, the last "o" is in "john" at position 21, so it prints 21
console.log(txt.lastIndexOf("o"));
// the second number is the position where the search starts, and it goes backwards (towards the left) from there
// it starts at position 6 and goes back, and finds the "o" of "hello" at 4 -> prints 4
// note: lastIndexOf only takes 2 things (substring and start position). The third number 16 is ignored
console.log(txt.lastIndexOf("o", 6, 16)); // substring  , start position (inclusive) , end position(exclusive)
// (exclusive means that position is NOT checked)

// returns true if the string ends with the specified substring
// our text ends with "n" and not "z", so it prints false
console.log(txt.endsWith("z"));
// the last letter is "n", so it prints true
console.log(txt.endsWith("n"));
// here we only look at the first 16 characters ("hello world this"), and that ends with "is", so true
console.log(txt.endsWith("is", 16)); // substring , end poisition (exclusive)

// returns true if the string starts with the specified substring
// our text starts with "h" and not "z", so it prints false
console.log(txt.startsWith("z"));
// it starts with "h", so it prints true
console.log(txt.startsWith("h"));
// start checking from position 12, where the word "this" begins, and it starts with "t", so true
console.log(txt.startsWith("t", 12)); // substring , start position(inclusive)

// ============================================================
// PRACTICE TASKS (try them yourself, no solutions given)
// ============================================================

// Task 1: Use typeof to print the type of 45, "45", 4.5, true, null and undefined.
// Task 2: Ask the user for their birth year using prompt. Convert it to a number and print their age.
// Task 3: Ask the user for two numbers using prompt and print their sum. Then find out why "5" + "5" gives "55" and fix it so it gives 10.
// Task 4: Ask for first name, last name and favourite food. Print one sentence using "+" (concatenation).
// Task 5: Print the same sentence from Task 4 again, but this time using backticks and ${}.
// Task 6: Guess the output first, then run and check: 5 + "5", "5" - 2, "5" * "2", +"7" + 3, -"3" + 10.
// Task 7: Make a variable with the text "javascript is fun". Print its first letter, last letter and total length.
// Task 8: For the same text, print the letter at index -3 using at(). Then try charAt(-3) and note the difference.
// Task 9: Print the text in all capital letters and then all small letters. Check that the original text did not change.
// Task 10: Replace only the first "a" with "@". Then replace every "a" with "@" using two different ways.
// Task 11: Check if the text has the word "fun" and the word "boring". Print true/false for each.
// Task 12: Find the first and the last position of the letter "s" in the text.
// Task 13: Find the position of "a" starting the search from index 3.
// Task 14: Check if the text starts with "java" and ends with "fun". Then check if it starts with "script" from index 4.
// Task 15: Ask the user for a word and tell them if it starts with a capital "A" (hint: use startsWith).
// Task 16: Store the text "  hello  " (with spaces around). Find out on your own which string method removes those extra spaces and try it.
// Task 17: Ask the user for their email and check if it includes "@" and ends with ".com". Print true or false.
// Task 18: Print the last character of any string typed by the user, using two different ways (length and at).
