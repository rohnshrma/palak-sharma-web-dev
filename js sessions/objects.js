// =====================================================================
// OBJECTS
// =====================================================================
// CONCEPT : An object is a collection of related data stored as
//           key : value pairs. Each pair is called a "property".
// Example : A car has a model, a brand, a year. Instead of making
//           3 separate variables, we keep all of them inside 1 object.
// Syntax  : let objectName = { key1: value1, key2: value2 };
// Note    : Array uses [] and index numbers (0, 1, 2...).
//           Object uses {} and key names (model, brand...).

// "let car" creates a variable named car, and { starts the object.
let car = {
  // key is "model", value is the string "mustang"
  model: "mustang",
  // key is "brand", value is the string "ford"
  brand: "ford",
  // key is "year", value is the number 2020 (values can be of any data type)
  year: 2020,
  // key is "colors", value is an array. Yes, an object can hold an array also.
  colors: ["red", "green", "blue"],
  // } closes the object. Comma after the last property is allowed (trailing comma).
};

// ---------------------------------------------------------------------
// READING (ACCESSING) VALUES FROM AN OBJECT : there are 2 ways
// ---------------------------------------------------------------------

// Way 1 - Bracket notation : objectName["key"]
// Key is written as a string inside square brackets. Prints : ford
// Useful when the key is stored in a variable or has a space in it.
console.log(car["brand"]);

// Way 2 - Dot notation : objectName.key
// Shorter and most commonly used. Prints : ford (same result as above)
console.log(car.brand);

// ---------------------------------------------------------------------
// UPDATING A VALUE
// ---------------------------------------------------------------------

// "year" key already exists in car, so its old value 2020 is replaced by 2012.
// Rule : if the key exists  -> value gets updated.
car.year = 2012;

// Prints the full object. Now year is showing 2012 instead of 2020.
console.log(car);

// ---------------------------------------------------------------------
// ADDING A NEW PROPERTY
// ---------------------------------------------------------------------

// creates a new key : value pair
// "isAvailable" key does not exist in car, so JavaScript creates it
// and stores the boolean value false in it.
// Rule : if the key does not exist -> new key : value pair gets added.
car.isAvailable = false;

// Prints the full object again. Now it has 5 properties, isAvailable is the new one.
console.log(car);

// =====================================================================
// CONSTRUCTOR FUNCTION
// =====================================================================
// PROBLEM : If we need 50 student objects, writing { name, age, ... }
//           by hand 50 times is a lot of repeated work.
// SOLUTION: A constructor function works like a mould / blueprint.
//           We write the structure only once and then create as many
//           objects as we want from it.
// RULES   : 1. Name starts with a capital letter (GenStudent) - this is
//              a naming convention so everybody knows it is a constructor.
//           2. It must be called with the "new" keyword.

// constructor function : create new objects

// Function is defined with 4 parameters. These will receive the
// values that we pass at the time of creating a student.
function GenStudent(name, age, gender, course) {
  // {} : this
  // When we call this function with "new", JavaScript first creates an
  // empty object {} behind the scenes. The keyword "this" points to
  // that new empty object.

  // Adds a key "name" in the new object and stores the parameter value in it.
  // Left side (this.name) = key of the object, right side (name) = parameter.
  this.name = name;
  // Adds a key "age" in the new object.
  this.age = age;
  // Adds a key "gender" in the new object.
  this.gender = gender;
  // Adds a key "course" in the new object.
  this.course = course;

  // Adds a key "info" whose value is a function.
  // A function stored inside an object is called a "method".
  this.info = function () {
    // Inside a method, "this" means the object which called the method.
    // So this.name gives the name of that particular student.
    console.log("welcome ", this.name);
  };
  // No "return" is written here. With "new", the object (this) is
  // returned automatically.
}

// "new" keyword does 3 things :
//   1. creates an empty object {}
//   2. runs GenStudent with "this" pointing to that object
//   3. returns the filled object
// Values go in the same order as the parameters :
// name = "palak", age = 19, gender = "female", course = "MERN Stack"
let palak = new GenStudent("palak", 19, "female", "MERN Stack");

// Prints the student object with name, age, gender, course and the info method.
console.log(palak);

// Calls the info method of palak. Here "this" = palak. Prints : welcome  palak
palak.info();

// =====================================================================
// CLASS
// =====================================================================
// CONCEPT : A class is also a blueprint for creating objects. It does
//           the same job as a constructor function, but the syntax is
//           cleaner and easier to read. It came in ES6 (2015).
// TERMS   : class    -> the blueprint (written only once)
//           object   -> the actual thing made from the blueprint
//                       (also called an "instance")
//           property -> data inside the object (model, brand)
//           method   -> function inside the object (info)

// class :
// static
// TYPE 1 - STATIC (FIXED) VALUES : the values are hard-coded inside the
// class, so every object made from this class gets exactly the same data.

// "class" keyword followed by the class name. Name starts with a capital letter.
class Car {
  // {}
  // Just like before, "new Car()" creates an empty object {} first.

  // These are "class fields". Every new object gets these 3 properties
  // with these same fixed values. No let / const / this is written here.
  model = "figo";
  brand = "ford";
  mileage = "10 kmpl";

  // This is a method. Inside a class we do not write the "function" keyword.
  info() {
    // Template literal : written inside backticks ` `.
    // ${ } puts the value of a variable directly inside the string.
    // "this" = the object which called info().
    console.log(`${this.model} by ${this.brand} gives ${this.mileage} mileage`);
  }
}

// Creates the first object (instance) from the Car class.
// Brackets are empty because this class does not take any values.
let c1 = new Car();

// Prints : Car { model: 'figo', brand: 'ford', mileage: '10 kmpl' }
console.log(c1);

// Calls the method. Prints : figo by ford gives 10 kmpl mileage
c1.info();

// Creates a second object from the same class.
let c2 = new Car();

// Prints exactly the same data as c1, because the values are fixed in the class.
console.log(c2);

// Prints the same line as c1.info().
// DRAWBACK of static : every car is a "figo". We cannot make different cars.
c2.info();

// semi dynamic
// TYPE 2 - SEMI DYNAMIC : the class has no fixed values. We create the
// object first (empty) and then fill the values by calling a method.
// So each object can have different data, but it needs 2 steps.

class Bike {
  // {}
  // "new Bike()" creates an empty object {} - no properties at this stage.

  // A normal method which takes 3 values through parameters
  // and stores them in the object using "this".
  takeValues(model, brand, mileage) {
    // Creates key "model" in the object and stores the parameter value.
    this.model = model;
    // Creates key "brand" in the object.
    this.brand = brand;
    // Creates key "mileage" in the object.
    this.mileage = mileage;
  }

  // Method to print the details of the bike.
  info() {
    console.log(`${this.model} by ${this.brand} gives ${this.mileage} mileage`);
  }
}

// Step 1 : create the object. At this point b1 is empty -> Bike {}
let b1 = new Bike();

// Step 2 : call takeValues to fill the data.
// model = "zx10r", brand = "kawasaki", mileage = 2020
// (2020 is passed in the place of mileage, so it will be printed as the mileage)
b1.takeValues("zx10r", "kawasaki", 2020);

// Prints : Bike { model: 'zx10r', brand: 'kawasaki', mileage: 2020 }
console.log(b1);

// Prints : zx10r by kawasaki gives 2020 mileage
b1.info();

// Creates a second bike, but this time takeValues is NOT called.
let b2 = new Bike();

// Prints : Bike {}  -> empty object, because no values were given.
console.log(b2);

// Prints : undefined by undefined gives undefined mileage
// Reason : model, brand and mileage do not exist in b2, and reading a
//          key which does not exist gives "undefined".
// DRAWBACK of semi dynamic : if we forget to call takeValues, the object
// stays empty. Creating and filling are 2 separate steps.

b2.info();

// dynamic
// TYPE 3 - DYNAMIC : values are given at the time of creating the object
// itself, in a single step, like : new Bike("zx10r", "kawasaki", "15 kmpl")
// This is done with a special method called "constructor", which runs
// automatically when we write "new". (This is the next topic.)
