// arrays
// arrays are used to store multiple values of similar or different data types

// [] are used to create an array where values are separated using ","

let marks = [3, 45, 2, 33, 24, 32];
console.log(marks.length);

console.log(marks[0]);
console.log(marks[marks.length - 1]);

// return item on the index specified
console.log(marks.at(0)); //  positive
console.log(marks.at(-1)); // negative
console.log(marks.at(100)); // returns undefined if index out of range

// console.log(marks.concat)

let a = [12, 3, 45];
let b = [312, 53, 645];

console.log(a + b); // concatenating two arrays with + gives a string back

console.log(a.concat(b)); // union of two arrays

// add  new item/s at the end of an array
a.push(99, 88, 77);

console.log(a);
// add new item/s at the start of an array

a.unshift(100, 290);
console.log(a);

// remove last item from an array
a.pop();
console.log(a);
// remove first item from an array
a.shift();
console.log(a);

// add, remove , update
// a.splice() // index, delete count, new item/s

// a.splice(1, 0, 100); // add new item
// console.log(a);

// a.splice(1, 1, 100); // update item
// console.log(a);

// a.splice(1, 1); // remove item
// console.log(a);
