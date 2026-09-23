// STRINGS - notes

// typeof tells us the data type of a value
// console.log(typeof 123);       // "number"
// console.log(typeof 1.23);      // "number"
// console.log(typeof "1.23");    // "string"
// console.log(typeof null);      // "object" (old JS bug)
// console.log(typeof undefined); // "undefined"
// console.log(typeof true);      // "boolean"

// string = text, written in single ' ', double " " or backtick ` ` quotes

// note: prompt() always returns a string, even if user types a number
// convert it using Number(), parseInt() or parseFloat() before doing maths

// var yourName = prompt("Enter your name : ");
// console.log(yourName, typeof yourName);

// var age = Number(prompt("Enter your age : "))
// var age = parseInt(prompt("Enter your age : "))   // whole number only
// var height = parseFloat(prompt("Enter your height : ")) // keeps decimals

// String() / toString() convert other types INTO a string
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log((123).toString()); // "123"

// concatenation = joining strings with "+"
// var fName = prompt("Enter name :");
// var city = prompt("Enter city :");
// var age = parseInt(prompt("Enter age :"));
// console.log("my name is " + fName + " and i live in " + city + " and i am " + age + " years old");

// template literals - easier way to join text using backticks and ${}
// console.log(`My name is ${fName} and i am ${age} years old living in ${city}`);

var num1 = 5;
var num2 = 10;
console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`); // can do maths inside ${}
console.log(`Line one
Line two`); // backticks also allow multi-line text directly

// number + string = string, JS converts the number to text first
// console.log(12 + 12);      // 24
// console.log(12 + "12");    // "1212"
// console.log("12" + "12");  // "1212"
// console.log(+"12" + 12);   // 24, the + before "12" converts it to a number
// console.log(-"12" + 12);   // 0

// indexing = position of a character, starting from 0
// h  e  l  l  o
// 0  1  2  3  4   -> from left
// -5 -4 -3 -2 -1  -> from right, last char is -1

var txt = "hello world this is john";

console.log(txt[0]); // "h", first character
console.log(txt[txt.length - 1]); // "n", last character
console.log(txt[999]); // undefined, no error

// ============================================================
// STRING METHODS
// a method never changes the original string, it returns a new one
// ============================================================

// ---------- case ----------

var up = txt.toUpperCase(); // all caps
console.log(up);
console.log(up.toLowerCase()); // all small
console.log(txt); // original never changes

// ---------- getting a character ----------

console.log(up.at(0)); // "H", works with negative index too
console.log(up.at(-1)); // "N"
console.log(up.charAt(0)); // "H", only positive index
console.log(up.charAt(-1)); // "", nothing for negative

console.log("A".charCodeAt(0)); // 65, character's number code
console.log("A".codePointAt(0)); // 65, works better with emojis
console.log("😀".codePointAt(0)); // 128512

console.log(String.fromCharCode(65)); // "A", number back to character
console.log(String.fromCharCode(72, 73)); // "HI"

// ---------- cutting a piece of text ----------

console.log(txt.slice(0, 5)); // "hello", allows negative index
console.log(txt.slice(6)); // rest of string from index 6
console.log(txt.slice(-4)); // last 4 characters -> "john"

console.log(txt.substring(0, 5)); // "hello", like slice but no negatives
console.log(txt.substring(5, 0)); // swaps to (0,5) automatically
// substr() also exists but it's old, avoid it - use slice/substring instead

// ---------- replacing text ----------

console.log(txt.replace("o", "x")); // replaces only first "o"
console.log(txt.replace(/o/g, "x")); // /g means replace all "o"
console.log(txt.replaceAll("o", "x")); // same as above, simpler

// ---------- searching ----------

console.log(txt.includes("a")); // false, no "a" in text
console.log(txt.includes("o")); // true

console.log(txt.indexOf("o")); // 4, first "o"
console.log(txt.indexOf("o", 5)); // 7, search starts from index 5

console.log(txt.lastIndexOf("o")); // 22, last "o"
console.log(txt.lastIndexOf("o", 6)); // 4, searches backward from index 6

console.log(txt.search(/wor/)); // 6, works like indexOf but with regex
console.log(txt.search(/[A-Z]/)); // -1, no capital letters here

console.log(txt.match(/o/g)); // ["o","o","o"], all matches as array
console.log(txt.match(/xyz/)); // null, no match

// ---------- start / end check ----------

console.log(txt.endsWith("z")); // false
console.log(txt.endsWith("n")); // true
console.log(txt.endsWith("is", 16)); // checks only first 16 chars

console.log(txt.startsWith("z")); // false
console.log(txt.startsWith("h")); // true
console.log(txt.startsWith("t", 12)); // checks starting at index 12

// ---------- length, repeat, padding ----------

console.log(txt.length); // 25, total characters

console.log(txt.padStart(30)); // adds spaces at start till length 30
console.log(txt.padStart(30, "$")); // pads with "$" instead
console.log(txt.padEnd(30, "$")); // pads at the end
console.log("Item".padEnd(10, ".") + "Price"); // useful for aligning text

console.log(txt.repeat(3)); // repeats whole string 3 times

// ---------- removing spaces ----------

console.log("   hello world   ".trim()); // removes spaces both sides
console.log("   hello world   ".trimStart()); // removes spaces from start only
console.log("   hello world   ".trimEnd()); // removes spaces from end only

console.log(txt.replaceAll(" ", "")); // removes all spaces, not just edges

// ---------- joining / splitting ----------

console.log(txt.concat(" and i am ", "20 years old.")); // joins strings

console.log(txt.split(" ")); // string -> array, cut at every space
console.log(txt.split("")); // splits into single characters
console.log("2024-01-15".split("-")); // ["2024","01","15"]

console.log(txt.split(" ").join("-")); // array -> string, opposite of split

// ---------- comparing ----------

console.log("apple".localeCompare("banana")); // negative, apple comes first
console.log("banana".localeCompare("apple")); // positive, banana comes after
console.log(["Zebra", "apple", "Mango"].sort((a, b) => a.localeCompare(b))); // proper alphabetical sort

// ============================================================
// PRACTICE - GUESS THE OUTPUT
// ============================================================

// 1. Print typeof for 45, "45", 4.5, true, null, undefined.
// 2. Ask birth year with prompt, convert to number, print age.
// 3. Ask two numbers with prompt, print sum. Why does "5" + "5" give "55"? Fix it to give 10.
// 4. Ask first name, last name, favourite food. Print one sentence using "+".
// 5. Same as task 4 but using backticks and ${}.
// 6. Guess then check: 5 + "5", "5" - 2, "5" * "2", +"7" + 3, -"3" + 10.
// 7. Text "javascript is fun" - print first letter, last letter, length.
// 8. Same text - print letter at index -3 using at(). Try charAt(-3), see the difference.
// 9. Print text in caps then small letters. Confirm original text is unchanged.
// 10. Replace only first "a" with "@", then replace all "a" with "@" (two ways).
// 11. Check if text includes "fun" and "boring".
// 12. Find first and last position of "s" in the text.
// 13. Find position of "a" starting search from index 3.
// 14. Check text starts with "java", ends with "fun", starts with "script" from index 4.
// 15. Ask user for a word, check if it starts with capital "A".
// 16. Text "  hello  " - clean it with trim, trimStart, trimEnd, compare results.
// 17. Ask for email, check it includes "@" and ends with ".com".
// 18. Print last character of any user string, two ways (length, at).

// ============================================================
// PRACTICE - REAL LIFE PROBLEMS
// ============================================================

// 1. Username generator: ask first name and last name, join first 3 letters
//    of each in lowercase. "Rohan" + "Sharma" -> "rohsha".

// 2. Email check: ask for email, print "Valid" only if it has "@" and "." and
//    doesn't start with "@".

// 3. Title case: ask for a sentence, capitalize first letter of every word.
//    "hello world" -> "Hello World". (split, slice, join)

// 4. Password strength: "Weak" if length < 6, "Medium" if only letters,
//    "Strong" if it has a number too.

// 5. Mask card number "4111111111111111" -> show only last 4 digits,
//    rest as stars: "************1111".

// 6. Ask email like "john@gmail.com", split it at "@" to get username and domain.

// 7. Shorten long text: if longer than 20 characters, cut it and add "...".

// 8. Palindrome check: ask a word, reverse it, compare with original (ignore case).

// 9. Count vowels in a sentence entered by the user.

// 10. Clean form input: trim extra spaces from ends, and fix double spaces in
//     the middle to single spaces.

// 11. Receipt: items ["Milk","Bread","Eggs"] with prices [55,40,90]. Print
//     them aligned nicely using padEnd.

// 12. Phone number formatter: ask 10-digit number, print as "XXXXX-XXXXX".
