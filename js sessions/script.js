// DATA TYPES - notes

// primitive (simple, single value) types

// Number : int + float, no separate type for decimals
console.log(typeof 10); // "number"
console.log(typeof 10.5); // "number"

// Boolean : true or false only
console.log(typeof true); // "boolean"

// String : text, in ' ', " " or ` ` quotes
console.log(typeof "hello"); // "string"

// undefined : value not given yet (unintentional, JS sets this on its own)
var x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

// null : empty on purpose (intentional, we set this ourselves)
var y = null;
console.log(y); // null
console.log(typeof y); // "object", old JS bug, y is still actually empty

// BigInt : for numbers too big for the normal Number type, written with "n" at the end
var big = 12345678901234567890n;
console.log(typeof big); // "bigint"

// Symbol : creates a totally unique value, mainly used as a hidden/unique object key
var sym = Symbol("id");
console.log(typeof sym); // "symbol"

// reference (complex, can hold many values) types

// Object : key-value pairs
var person = { name: "John", age: 25 };
console.log(person, typeof person); // "object"

// Array : ordered list of values
var fruits = ["apple", "mango", "banana"];
console.log(fruits, typeof fruits); // "object", arrays are a type of object

// Function : reusable block of code
function greet() {
  return "hello";
}
console.log(greet(), typeof greet); // "function"

// main difference between primitive and reference types:
// primitive - copying makes a totally separate copy
var a = 5;
var b = a;
b = 10;
console.log(a, b); // 5 10, changing b does not affect a

// reference - copying just copies the "address", both point to the same thing
var obj1 = { value: 5 };
var obj2 = obj1;
obj2.value = 10;
console.log(obj1.value, obj2.value); // 10 10, changing obj2 also changed obj1

// ============================================================
// PRACTICE - REAL LIFE PROBLEMS
// ============================================================

// 1. Make one variable for each primitive type (number, string, boolean,
//    undefined, null, bigint, symbol) and print typeof for each.

// 2. Store a user's profile as an object: name, age, email, isVerified
//    (boolean). Print the whole object and each value one by one.

// 3. Store a shopping cart as an array of item names. Add a new item, remove
//    one, and print the final cart.

// 4. Make two variables holding numbers, copy one into the other, change the
//    copy, and prove the original did not change (primitive copy behaviour).

// 5. Make an object for a "car" (brand, model, price), copy it into another
//    variable, change a value in the copy, and show it also changed the
//    original (reference copy behaviour). Then look up Object spread {...obj}
//    or structuredClone() to fix this and make a real separate copy.

// 6. A signup form has fields: username (string), age (number), agreedToTerms
//    (boolean), referralCode (could be null if not given). Create these
//    variables and print typeof for each one.
