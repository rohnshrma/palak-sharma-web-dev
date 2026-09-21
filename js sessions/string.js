// how to check the data type of a value
// typeof keyword

// console.log(typeof 123);
// console.log(typeof 1.23);
// console.log(typeof "1.23");
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);

// string
// a sequence of characters (alphabets, numbers, special symbols and whitespace) enclosed in single ' ', double " " quotes and backticks ` `

// note :  value taken as an input using the prompt method is of type "string" by default
// but can be converted into a supported data type

// var yourName = prompt("Enter your name : ");
// console.log(yourName, typeof yourName);

// var age = Number(prompt("Enter your age : "))
// var age = parseInt(prompt("Enter your age : "))
// var height = parseFloat(prompt("Enter your height : "))
// console.log(age, typeof age);

// concatenation
// adding two or more string together using the "+" operator

// var fName = prompt("Enter name :");
// var city = prompt("Enter city :");
// var age = parseInt(prompt("Enter age :"));

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
// ` ` backticks are used to create a string where
// values, variables and expressions are injected in ${}

// console.log(`My name is ${fName} and i am ${age} years old living in ${city}`);

// string + int = string

// impo for interview

// console.log(12 + 12);
// console.log(12 + "12");
// console.log("12" + "12");
// console.log(+"12" + 12);
// console.log(+"12");
// console.log(-"12" + 12);

// indexing
// counting starting from 0 used to access character of a string

// h e l l o
// 1 2 3 4 5 : normal counting (for length)
// 0 1 2 3 4 : positive indexing (L -> R)
//-5-4-3-2-1: negative indexing (L -> R)

// [ ] are used to use indexing
// first character is always on the 0th position
// last character is always on the [string.length - 1] = th position

var txt = "hello world this is john";

console.log(txt[0]);
console.log(txt[txt.length - 1]);

// string methods

// return an uppercase version of string
var up = txt.toUpperCase();
console.log(up);

// return an lowercase version of string
console.log(up.toLowerCase());

// return the character on the index specified (positive and negative)
console.log(up.at(0));
console.log(up.at(-1));

// return the character on the index specified (positive)
console.log(up.charAt(0));
console.log(up.charAt(-1));

// replace first occurances of old , with a new string
console.log(txt.replace("o", "x"));
console.log(txt.replace(/o/g, "x"));

// replace all occurances of old , with a new string
console.log(txt.replaceAll("o", "x"));

// return true if the string contains a substring, else false
console.log(txt.includes("a"));
console.log(txt.includes("o"));

// returns index of the first occurance of the substring provided
console.log(txt.indexOf("o")); // substring
console.log(txt.indexOf("o", 5)); // substring ,  start position (inclusive)

// returns index of the last occurance of the substring provided
console.log(txt.lastIndexOf("o"));
console.log(txt.lastIndexOf("o", 6, 16)); // substring  , start position (inclusive) , end position(exclusive)

// returns true if the string ends with the specified substring
console.log(txt.endsWith("z"));
console.log(txt.endsWith("n"));
console.log(txt.endsWith("is", 16)); // substring , end poisition (exclusive)

// returns true if the string starts with the specified substring
console.log(txt.startsWith("z"));
console.log(txt.startsWith("h"));
console.log(txt.startsWith("t", 12)); // substring , start position(inclusive)
