// =============================================================
// ARRAYS
// =============================================================
// An array is one variable that holds a list of values instead of
// just one. Think of it as a row of numbered boxes.
// The values can be the same type (all numbers) or mixed
// (numbers, strings, booleans together). Both are allowed.
//
// Make one with square brackets [] and separate the values with commas.
// Every value gets a position number called its INDEX.
// Counting starts at 0, not 1. So the 1st item is at index 0.

let marks = [3, 45, 2, 33, 24, 32];
//  index:   0   1  2   3   4   5

console.log(marks.length); // 6 -> how many items are in the list

console.log(marks[0]); // 3 -> first item (index 0)
console.log(marks[marks.length - 1]); // 32 -> last item
// Why length - 1? There are 6 items but counting starts at 0,
// so the last index is 5, which is always one less than length.

// ---------------------------------------------------------------
// .at(index) - another way to grab an item
// ---------------------------------------------------------------
// Works like marks[i], but it also lets you count from the END
// using negative numbers. -1 is the last item, -2 the second last...
console.log(marks.at(0)); // 3  -> positive number counts from the start
console.log(marks.at(-1)); // 32 -> negative counts from the end (much easier than length - 1)
console.log(marks.at(100)); // undefined -> there's no box number 100, so nothing comes back

// console.log(marks.concat)

// ---------------------------------------------------------------
// JOINING TWO ARRAYS
// ---------------------------------------------------------------
let a = [12, 3, 45];
let b = [312, 53, 645];

console.log(a + b); // "12,3,45312,53,645"
// + does NOT join arrays. JS turns both into text first and glues
// the text together, so you get one messy string. Don't use + for this.

console.log(a.concat(b)); // [12, 3, 45, 312, 53, 645]
// .concat() is the right way: gives a NEW array with a's items
// followed by b's items. a and b themselves stay the same.

// ---------------------------------------------------------------
// ADD / REMOVE AT THE ENDS
// ---------------------------------------------------------------
// These four CHANGE the original array (no new array is made).
//
//   push    -> add to the end
//   pop     -> remove from the end
//   unshift -> add to the start
//   shift   -> remove from the start

a.push(99, 88, 77); // can add one or many items at once
console.log(a); // [12, 3, 45, 99, 88, 77]

a.unshift(100, 290); // added at the front, in the same order you wrote them
console.log(a); // [100, 290, 12, 3, 45, 99, 88, 77]

a.pop(); // last item (77) is gone. No need to say which, it's always the last
console.log(a); // [100, 290, 12, 3, 45, 99, 88]

a.shift(); // first item (100) is gone. Everything else moves one place left
console.log(a); // [290, 12, 3, 45, 99, 88]

// ---------------------------------------------------------------
// splice - add, remove or replace ANYWHERE in the middle
// ---------------------------------------------------------------
// a.splice(startIndex, howManyToDelete, ...newItems)
//   startIndex       -> where to go in the array
//   howManyToDelete  -> how many items to take out from there (0 = none)
//   newItems         -> optional, what to put in at that spot
// Like push/pop, it changes the original array.

// a.splice(1, 0, 100); // go to index 1, delete 0, put 100 in -> pure ADD
// console.log(a);

// a.splice(1, 1, 100); // go to index 1, delete 1, put 100 in its place -> UPDATE
// console.log(a);

// a.splice(1, 1); // go to index 1, delete 1, put nothing back -> REMOVE
// console.log(a);
