// =============================================================
// ARRAY HIGHER ORDER FUNCTIONS (HOF)
// =============================================================
// A HIGHER ORDER FUNCTION is a function that takes ANOTHER function
// as an input (or gives one back). Array methods like forEach, map,
// filter, some, every and sort are HOFs: you hand them a small
// function and they run it on every item of the array for you.
//
// The small function you hand over is called a CALLBACK.
// JS calls it once per item and passes it up to 3 things:
//   (item, index, array)
//    item  -> the current value
//    index -> its position (0, 1, 2...)
//    array -> the whole original array (rarely needed)
// You only write the ones you need, in this same order.
//
// Why bother? They do the same job as a for loop, but with less
// code: no i = 0, no i < length, no i++, no marks[i].

var marks = [3, 34, 23, 342, 335, 4]; // the list we'll practice on

// ---------------------------------------------------------------
// FOR LOOP (the old way, for comparison)
// ---------------------------------------------------------------
for (let i = 0; i < marks.length; i++) {
  // start at index 0, stop before length, go up by 1 each round
  console.log(marks[i]); // marks[i] -> the item at the current index
}

// ---------------------------------------------------------------
// arr.forEach((item, index, array) => {}) : iterate over array
// ---------------------------------------------------------------
// Runs the callback once for every item, start to end.
// It doesn't return anything (gives back undefined), so you use it
// when you just want to DO something with each item (print, add up,
// push into another array), not to build a new array directly.

marks.forEach((mark, i) => {
  // mark = current item, i = its index (JS fills these in for us)
  console.log(mark, i); // 3 0, then 34 1, then 23 2 ...
});

// sum of all marks

// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }
// console.log(sum);

let sum = 0; // starts at 0, we keep adding into it
marks.forEach((mark) => (sum += mark)); // each round: sum = sum + mark
// The ( ) around sum += mark is just so the arrow function body reads as
// one expression. forEach ignores the returned value anyway.
console.log(sum); // 741

// create separate array of even and odd numbers

let odds = []; // empty box for odd numbers
let evens = []; // empty box for even numbers

// for (let i = 0; i < marks.length; i++) {
//   marks[i] % 2 === 0 ? evens.push(marks[i]) : odds.push(marks[i]);
// }

marks.forEach((mark) => (mark % 2 === 0 ? evens.push(mark) : odds.push(mark)));
// mark % 2 -> remainder after dividing by 2. 0 means even.
// condition ? doThisIfTrue : doThisIfFalse  (ternary operator)
// so: even -> goes into evens, otherwise -> goes into odds

console.log(evens); // [34, 342, 4]
console.log(odds); // [3, 23, 335]

// ---------------------------------------------------------------
// arr.map((item, index, array) => {}) : returns a NEW array
// ---------------------------------------------------------------
// Runs the callback on every item and collects whatever the callback
// RETURNS into a brand new array of the SAME length.
// Use it to TRANSFORM every item (double it, clean it, format it).
// The original array is not changed.

// double of each number

let doubles = []; // forEach way needs an empty array to push into

// for (let i = 0; i < marks.length; i++) {
//   doubles.push(marks[i] * 2);
// }

marks.forEach((mark) => doubles.push(mark * 2)); // push each doubled value by hand

let doubles_2 = marks.map((mark) => mark * 2);
// map way: no empty array, no push. Whatever the arrow returns
// (mark * 2) is put in the new array for us.

console.log(doubles); // [6, 68, 46, 684, 670, 8]
console.log(doubles_2); // [6, 68, 46, 684, 670, 8] -> same result, less code

let names = ["rohan", "JaCk", "palak", "SUMIT"]; // messy capital letters

let names_clean = names.map(
  (name) => name[0].toUpperCase() + name.slice(1).toLowerCase(),
  // name[0]               -> first letter, e.g. "r"
  // .toUpperCase()        -> "R"
  // name.slice(1)         -> everything from index 1 onward, e.g. "ohan"
  // .toLowerCase()        -> make the rest small, "JaCk" -> "ack"
  // +                     -> glue them: "R" + "ohan" = "Rohan"
);

console.log(names_clean); // ["Rohan", "Jack", "Palak", "Sumit"]

// even marks only

let map_evens = marks.map((mark) => mark % 2 == 0);
console.log(map_evens); // [false, true, false, true, false, true]
// Common mistake! map always gives back the SAME number of items.
// The callback returned true/false, so we got a list of true/false,
// not the even numbers. To KEEP only some items, use filter.

// ---------------------------------------------------------------
// arr.filter((item, index, array) => {}) : array of items which passed the condition
// ---------------------------------------------------------------
// The callback must return true or false.
//   true  -> item is KEPT in the new array
//   false -> item is skipped
// New array can be shorter than the original. Original is unchanged.

let filter_evens = marks.filter((mark) => mark % 2 === 0); // keep only evens
console.log(filter_evens); // [34, 342, 4]

let years = [1999, 2020, 2002, 2005, 2024, 2026, 2016];

// array of leap years
// Leap year rule: divisible by 4 AND (not divisible by 100 OR divisible by 400)
let leap_years = years.filter(
  (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0,
);
console.log(leap_years); // [2020, 2024, 2016]

// ---------------------------------------------------------------
// some / every : ask a yes/no question about the whole array
// ---------------------------------------------------------------
// some => return true if any of the item passes the given condition
//         (stops as soon as it finds ONE that passes)
// every => return true if all the items passes the given condition
//         (stops as soon as it finds ONE that fails)
// Both give back a single true/false, not an array.

let isAnyEven = marks.some((mark) => mark % 2 === 0); // is there at least one even?
console.log(isAnyEven); // true (34 is even)

let areAllEven = marks.every((mark) => mark % 2 === 0); // is every single one even?
console.log(areAllEven); // false (3 is odd)

// ---------------------------------------------------------------
// sort : a-z , z-a
// ---------------------------------------------------------------
// sort CHANGES the original array (unlike map/filter).
// Without a callback, sort treats everything as TEXT, so
// [3, 34, 4].sort() -> [3, 34, 4] because "34" comes before "4" in text order.
// So for numbers always pass a compare function (a, b) => ...
//   it returns a negative number -> a goes first
//   it returns a positive number -> b goes first
//   it returns 0                 -> leave them as they are

marks.sort((a, b) => a - b); // a - b -> small to big (ascending)
console.log(marks); // [3, 4, 23, 34, 335, 342]
marks.sort((a, b) => b - a); // b - a -> big to small (descending)
console.log(marks); // [342, 335, 34, 23, 4, 3]

names_clean.sort((a, b) => a.localeCompare(b));
// For strings, a - b doesn't work (you can't subtract text).
// a.localeCompare(b) gives negative/positive/0 just like a - b would,
// based on alphabetical order. -> A to Z
console.log(names_clean); // ["Jack", "Palak", "Rohan", "Sumit"]

names_clean.sort((a, b) => b.localeCompare(a)); // swap a and b -> Z to A
console.log(names_clean); // ["Sumit", "Rohan", "Palak", "Jack"]

// =============================================================
// PRACTICE TASKS (SOLVED 3 WAYS: for, forEach, the method)
// =============================================================
// Each task is wrapped in { } (a block). Variables made with let
// inside a block only live inside it, so we can reuse names like
// "result" in every task without clashing.

// -------------------- forEach tasks --------------------

// Task 1: print each fruit with its position, like "1. apple"
{
  let fruits = ["apple", "mango", "kiwi"];

  // for
  for (let i = 0; i < fruits.length; i++) {
    console.log(i + 1 + ". " + fruits[i]); // i + 1 because humans count from 1
  }

  // forEach (this IS the method for this topic)
  fruits.forEach((fruit, i) => console.log(`${i + 1}. ${fruit}`));
}

// Task 2: find the biggest number
{
  let nums = [12, 45, 7, 89, 23];

  // for
  let max1 = nums[0]; // assume the first is the biggest
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max1) max1 = nums[i]; // found a bigger one, remember it
  }
  console.log(max1); // 89

  // forEach
  let max2 = nums[0];
  nums.forEach((n) => {
    if (n > max2) max2 = n;
  });
  console.log(max2); // 89

  // method: Math.max with spread (...) opens the array into separate values
  console.log(Math.max(...nums)); // 89
}

// Task 3: count how many words are longer than 4 letters
{
  let words = ["hi", "hello", "javascript", "code", "arrays"];

  // for
  let count1 = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) count1++;
  }
  console.log(count1); // 3

  // forEach
  let count2 = 0;
  words.forEach((w) => {
    if (w.length > 4) count2++;
  });
  console.log(count2); // 3

  // method: filter keeps the long ones, .length counts them
  console.log(words.filter((w) => w.length > 4).length); // 3
}

// -------------------- map tasks --------------------

// Task 4: square every number
{
  let nums = [1, 2, 3, 4];

  // for
  let sq1 = [];
  for (let i = 0; i < nums.length; i++) {
    sq1.push(nums[i] * nums[i]);
  }
  console.log(sq1); // [1, 4, 9, 16]

  // forEach
  let sq2 = [];
  nums.forEach((n) => sq2.push(n * n));
  console.log(sq2); // [1, 4, 9, 16]

  // map
  let sq3 = nums.map((n) => n * n);
  console.log(sq3); // [1, 4, 9, 16]
}

// Task 5: add 18% GST to every price
{
  let prices = [100, 250, 500];

  // for
  let withTax1 = [];
  for (let i = 0; i < prices.length; i++) {
    withTax1.push(prices[i] * 1.18); // price + 18% = price * 1.18
  }
  console.log(withTax1); // [118, 295, 590]

  // forEach
  let withTax2 = [];
  prices.forEach((p) => withTax2.push(p * 1.18));
  console.log(withTax2);

  // map
  let withTax3 = prices.map((p) => p * 1.18);
  console.log(withTax3);
}

// Task 6: get the length of every word
{
  let words = ["sun", "moon", "stars"];

  // for
  let lens1 = [];
  for (let i = 0; i < words.length; i++) {
    lens1.push(words[i].length);
  }
  console.log(lens1); // [3, 4, 5]

  // forEach
  let lens2 = [];
  words.forEach((w) => lens2.push(w.length));
  console.log(lens2);

  // map
  console.log(words.map((w) => w.length)); // [3, 4, 5]
}

// -------------------- filter tasks --------------------

// Task 7: keep only marks that passed (>= 33)
{
  let scores = [20, 45, 33, 12, 78];

  // for
  let pass1 = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 33) pass1.push(scores[i]);
  }
  console.log(pass1); // [45, 33, 78]

  // forEach
  let pass2 = [];
  scores.forEach((s) => {
    if (s >= 33) pass2.push(s);
  });
  console.log(pass2);

  // filter
  console.log(scores.filter((s) => s >= 33)); // [45, 33, 78]
}

// Task 8: keep names that start with "a" (any case)
{
  let people = ["Amit", "rohan", "anjali", "Sara"];

  // for
  let a1 = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i][0].toLowerCase() === "a") a1.push(people[i]);
  }
  console.log(a1); // ["Amit", "anjali"]

  // forEach
  let a2 = [];
  people.forEach((p) => {
    if (p[0].toLowerCase() === "a") a2.push(p);
  });
  console.log(a2);

  // filter
  console.log(people.filter((p) => p[0].toLowerCase() === "a"));
}

// Task 9: remove empty strings from a list
{
  let inputs = ["hi", "", "js", "", "ok"];

  // for
  let clean1 = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] !== "") clean1.push(inputs[i]);
  }
  console.log(clean1); // ["hi", "js", "ok"]

  // forEach
  let clean2 = [];
  inputs.forEach((s) => {
    if (s !== "") clean2.push(s);
  });
  console.log(clean2);

  // filter
  console.log(inputs.filter((s) => s !== ""));
}

// -------------------- some tasks --------------------

// Task 10: is there any negative number?
{
  let nums = [4, 9, -2, 7];

  // for: as soon as we find one, we know the answer and can stop (break)
  let found1 = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      found1 = true;
      break;
    }
  }
  console.log(found1); // true

  // forEach: can't break out of forEach, so it checks every item
  let found2 = false;
  nums.forEach((n) => {
    if (n < 0) found2 = true;
  });
  console.log(found2); // true

  // some
  console.log(nums.some((n) => n < 0)); // true
}

// Task 11: did any student score 100?
{
  let scores = [88, 92, 100, 75];

  // for
  let hasTopper1 = false;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 100) {
      hasTopper1 = true;
      break;
    }
  }
  console.log(hasTopper1); // true

  // forEach
  let hasTopper2 = false;
  scores.forEach((s) => {
    if (s === 100) hasTopper2 = true;
  });
  console.log(hasTopper2);

  // some
  console.log(scores.some((s) => s === 100)); // true
}

// -------------------- every tasks --------------------

// Task 12: are all ages 18 or above?
{
  let ages = [21, 19, 17, 25];

  // for: assume yes, one failure turns it to no
  let allAdults1 = true;
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
      allAdults1 = false;
      break;
    }
  }
  console.log(allAdults1); // false (17)

  // forEach
  let allAdults2 = true;
  ages.forEach((a) => {
    if (a < 18) allAdults2 = false;
  });
  console.log(allAdults2);

  // every
  console.log(ages.every((a) => a >= 18)); // false
}

// Task 13: is every password at least 8 characters?
{
  let passwords = ["secret123", "hello2024", "qwertyuiop"];

  // for
  let ok1 = true;
  for (let i = 0; i < passwords.length; i++) {
    if (passwords[i].length < 8) {
      ok1 = false;
      break;
    }
  }
  console.log(ok1); // true

  // forEach
  let ok2 = true;
  passwords.forEach((p) => {
    if (p.length < 8) ok2 = false;
  });
  console.log(ok2);

  // every
  console.log(passwords.every((p) => p.length >= 8)); // true
}

// -------------------- sort tasks --------------------
// Without sort(), we have to do the sorting ourselves. The simplest
// way is BUBBLE SORT: compare neighbours, swap them if they're in the
// wrong order, and repeat until a full pass makes no swaps.
// ([x, y] = [y, x] swaps two values in one line.)

// Task 14: sort prices low to high
{
  // for (bubble sort). Each way gets its own fresh array to sort
  let p1 = [499, 99, 1299, 249];
  for (let i = 0; i < p1.length - 1; i++) {
    for (let j = 0; j < p1.length - 1 - i; j++) {
      // biggest values "bubble" to the end each round
      if (p1[j] > p1[j + 1]) [p1[j], p1[j + 1]] = [p1[j + 1], p1[j]];
    }
  }
  console.log(p1); // [99, 249, 499, 1299]

  // forEach (outer loop as forEach, inner still needs indexes)
  let p2 = [499, 99, 1299, 249];
  p2.forEach(() => {
    for (let j = 0; j < p2.length - 1; j++) {
      if (p2[j] > p2[j + 1]) [p2[j], p2[j + 1]] = [p2[j + 1], p2[j]];
    }
  });
  console.log(p2); // [99, 249, 499, 1299]

  // sort
  let p3 = [499, 99, 1299, 249];
  p3.sort((a, b) => a - b);
  console.log(p3); // [99, 249, 499, 1299]
}

// Task 15: sort cities Z to A
{
  // for (bubble sort, using localeCompare to compare text)
  let c1 = ["Delhi", "Agra", "Pune", "Mumbai"];
  for (let i = 0; i < c1.length - 1; i++) {
    for (let j = 0; j < c1.length - 1 - i; j++) {
      if (c1[j].localeCompare(c1[j + 1]) < 0) {
        // < 0 means c1[j] comes first alphabetically, but we want Z-A, so swap
        [c1[j], c1[j + 1]] = [c1[j + 1], c1[j]];
      }
    }
  }
  console.log(c1); // ["Pune", "Mumbai", "Delhi", "Agra"]

  // forEach
  let c2 = ["Delhi", "Agra", "Pune", "Mumbai"];
  c2.forEach(() => {
    for (let j = 0; j < c2.length - 1; j++) {
      if (c2[j].localeCompare(c2[j + 1]) < 0) {
        [c2[j], c2[j + 1]] = [c2[j + 1], c2[j]];
      }
    }
  });
  console.log(c2);

  // sort
  let c3 = ["Delhi", "Agra", "Pune", "Mumbai"];
  c3.sort((a, b) => b.localeCompare(a));
  console.log(c3); // ["Pune", "Mumbai", "Delhi", "Agra"]
}

// =============================================================
// COMBINED TASKS (try these yourself, no solutions given)
// =============================================================
// Each one needs 2 or more of: forEach, map, filter, some, every, sort.
// Try solving each with methods first, then with a plain for loop.
//
// 1. From [12, 7, 9, 20, 15, 4], keep only the odd numbers and then
//    double each of them. Expected: [14, 18, 30]
//
// 2. From ["  rohan", "PALAK ", "jAcK"], trim the spaces, make each
//    name Capitalized, then sort them A to Z.
//
// 3. Given prices [120, 45, 300, 80, 999], keep prices above 100,
//    add 18% GST to each, and print the total using forEach.
//
// 4. Given marks [55, 72, 31, 90, 28], check (with some) whether
//    anyone failed (< 33). If yes, print the failed marks sorted
//    high to low.
//
// 5. Given words ["code", "is", "fun", "javascript", "a"], remove
//    words shorter than 3 letters, convert the rest to UPPERCASE, and
//    check (with every) that all of them now have length >= 3.
//
// 6. From [3, 8, 1, 10, 6], get the top 3 numbers (biggest first)
//    and then make a new array with each one squared.
//
// 7. Given years [1996, 2000, 2003, 2012, 2019, 2024], filter the
//    leap years, sort them newest first, and print each with its
//    position like "1. 2024" using forEach.
//
// 8. Given temperatures in Celsius [0, 25, 37, 100, -5], convert all
//    to Fahrenheit (F = C * 9/5 + 32), then keep only those above 50
//    and check (with some) if any is above 200.
//
// 9. Given emails ["a@x.com", "bademail", "c@y.in", "d@z"], keep only
//    the ones that include "@" and ".", make them lowercase, and check
//    (with every) that none of them is empty.
//
// 10. Given an array of numbers [5, 10, 15, 20, 25, 30], keep numbers
//     divisible by both 5 and 2, map each to the string "Rs. <number>",
//     sort them Z to A as text, and print them one per line with forEach.
