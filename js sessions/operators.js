// OPERATORS - notes

// symbols that do some action on values (operands). eg: a + b

// ---------- 1. ARITHMETIC ----------
// basic maths

var a = 23;
var b = 3;

console.log(a + b); // add -> 26
console.log(a - b); // subtract -> 20
console.log(a * b); // multiply -> 69
console.log(a / b); // divide -> 7.66
console.log(a % b); // remainder -> 2 (useful for even/odd check)
console.log(a ** b); // power -> 23*23*23

// ---------- 2. UNARY ----------
// works on a single value

var count = 5;

console.log(+count); // unary plus, converts to number
console.log(+"5"); // "5" -> 5
console.log(+"hello"); // can't convert -> NaN
console.log(-count); // flips sign -> -5

var p = 10;
console.log(p++); // prints 10 first, then p becomes 11 (postfix)
console.log(p);

var q = 10;
console.log(++q); // q becomes 11 first, then prints 11 (prefix)
console.log(q);

var r = 10;
console.log(r--); // prints 10, then r becomes 9
var s = 10;
console.log(--s); // s becomes 9, then prints 9

console.log(typeof count); // "number"
console.log(void 0); // always gives undefined

var person = { name: "John", age: 25 };
console.log(delete person.age); // removes a property, returns true/false
console.log(person);

// ---------- 3. ASSIGNMENT ----------
// store or update a variable's value

var x = 12;
console.log(x);

x += 10; // x = x + 10
console.log(x);
x -= 4; // x = x - 4
console.log(x);
x *= 5; // x = x * 5
console.log(x);
x /= 10; // x = x / 10
console.log(x);
x %= 4; // x = x % 4
console.log(x);
x **= 20; // x = x ** 20
console.log(x);

// logical assignment - shortcuts for setting default values

var greeting = null;
greeting ||= "Hello Guest"; // sets value only if left side is falsy
console.log(greeting);

var visits = 0;
visits ||= 100; // careful, 0 is falsy so this overwrites it too
console.log(visits);

var userAge = 25;
userAge &&= userAge + 1; // runs only if left side is truthy
console.log(userAge);

var city;
city ??= "Delhi"; // sets value only if left side is null/undefined
console.log(city);

var score = 0;
score ??= 50; // 0 is not null/undefined, so it stays 0
console.log(score);

// ---------- 4. COMPARISON ----------
// compare two values, result is always true/false

console.log(12 > 10);
console.log(12 >= 10);
console.log(12 < 10);
console.log(12 <= 10);

// == checks only value, converts type if needed
console.log(12 == 10); // false
console.log(12 == "12"); // true

// === checks value AND type, no conversion (use this one normally)
console.log(12 === 10); // false
console.log(12 === "12"); // false, different types

// != checks value only
console.log(12 != 10); // true
console.log(12 != "12"); // false

// !== checks value and type
console.log(12 !== 10); // true
console.log(12 !== "12"); // true

// ---------- 5. LOGICAL ----------
// and (&&) : all conditions must be true
// or (||)  : at least one condition must be true
// not (!)  : flips true/false

console.log(12 > 10 && 10 < 12); // true
console.log(12 < 10 && 10 < 12); // false
console.log(12 < 10 && 10 > 12); // false

console.log(12 > 10 || 10 < 12); // true
console.log(12 < 10 || 10 < 12); // true
console.log(12 < 10 || 10 > 12); // false

console.log(!true); // false
console.log(!false); // true
console.log(!12 > 0); // ! runs first: !12 is false, false > 0 is false

// ?? nullish coalescing - only replaces null/undefined, not 0 or ""
var quantity = 0;
console.log(quantity || 10); // 10, wrong here since 0 is a valid value
console.log(quantity ?? 10); // 0, correct

var nickname = null;
console.log(nickname ?? "Guest"); // "Guest"

// ---------- 6. BITWISE ----------
// works on the actual bits (0s and 1s) of a number
// rarely used in daily work, mostly interview/low level stuff

console.log(5 & 1); // AND -> 1
console.log(5 | 1); // OR -> 5
console.log(5 ^ 1); // XOR -> 4
console.log(~5); // NOT -> -6
console.log(5 << 1); // shift left, same as x2 -> 10
console.log(5 >> 1); // shift right, same as /2 -> 2
console.log(-5 >>> 1); // unsigned shift right, ignores sign

// ---------- 7. TERNARY (?:) ----------
// short if-else in one line: condition ? ifTrue : ifFalse

var age = 20;
var canVote = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(canVote);

// can chain multiple conditions
var marks = 72;
var grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 50 ? "C" : "F";
console.log(grade);

// ---------- 8. OPTIONAL CHAINING (?.) ----------
// safely reads nested values, no crash if something is missing

var user = {
  name: "Alice",
  address: { city: "Mumbai" },
};

console.log(user.address?.city); // "Mumbai"
console.log(user.contact?.phone); // undefined, no crash
console.log(user.sayHello?.()); // calls function only if it exists

// ---------- 9. typeof ----------
// tells the data type of a value

console.log(typeof 45); // "number"
console.log(typeof "45"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (old JS bug, never fixed)
console.log(typeof {}); // "object"
console.log(typeof [1, 2, 3]); // "object" (arrays are objects too)
console.log(typeof function () {}); // "function"

// ---------- 10. instanceof ----------
// checks if something was made from a particular class

var today = new Date();
console.log(today instanceof Date); // true
console.log([1, 2, 3] instanceof Array); // true
console.log("hello" instanceof String); // false, plain strings aren't String objects

// ---------- 11. in ----------
// checks if a property exists in an object

var car = { brand: "Honda", model: "City" };
console.log("brand" in car); // true
console.log("color" in car); // false

var arr = ["a", "b", "c"];
console.log(1 in arr); // true, index 1 exists
console.log(5 in arr); // false

// ---------- 12. COMMA (,) ----------
// runs multiple things, keeps only the last value
// mostly seen in for-loops

var result = (1 + 2, 3 + 4, 5 + 6);
console.log(result); // 11

for (var i = 0, j = 10; i < 3; i++, j--) {
  console.log(i, j); // updates both i and j together
}

// ============================================================
// PRACTICE - REAL LIFE PROBLEMS
// try writing the code yourself, no answers given
// ============================================================

// 1. Shopping bill: price 250, qty 3, tax 18%. Find subtotal, tax amount, total.

// 2. Ask user a number with prompt(), tell if it's even or odd (use %).

// 3. Like counter: start at 0 likes, 3 people like it (++), 1 unlikes (--). Print final count.

// 4. Price 1500. Apply 10% discount, then add 18% tax. Update the same variable using -= and *=.

// 5. Simple login: check username and password from prompt() match exactly using === and &&.

// 6. Amusement park rule: allow ride if (age >= 12 OR height >= 140) AND no health issue.

// 7. Print "Minor"/"Adult"/"Senior Citizen" based on age using chained ternary.

// 8. Volume setting is 0 (user muted it), default is 50. Show why || breaks this and fix with ??.

// 9. apiResponse = { user: { profile: null } }. Safely print avatarUrl using ?., show "No avatar" if missing.

// 10. Check if a product object has a "discount" key using "in", show "No discount available" if not.

// 11. ATM withdrawal: check amount > 0, amount <= balance, and amount is multiple of 100 (%).

// 12. Signup form: country = "", age = null. Compare ??= vs ||= with defaults, note which one gives wrong result and why.
