// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var number = 27;
console.log(number); // Output: 27

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let string = "Day 1 of 30 Days of JavaScript!";
console.log(string); // Day 1 of 30 Days of JavaScript!

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const boolConst = true;
console.log(boolConst); // Output: true

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num = 7; // Number
let str = "JavaScript"; // String
let bool = false; // Boolean
let obj = {name: "Yash", Number : 47}; // Object
let arr = [1, 2, 3, 4, 5]; // Array

console.log(typeof num); // Output: number
console.log(typeof str); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object (Arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let reassignVar = "Initial Value";
console.log(reassignVar); // Output: Initial Value
reassignVar = "New Value";
console.log(reassignVar); // Output: New Value

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constVar = "Constant Value";
console.log(constVar); // Output: Constant Value
// Uncommenting the next line will cause an error
// constVar = "New Value"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let numberType = 999;
let stringType = "30 Days of Js";
let booleanType = true;
let objectType = { key: "value" };
let arrayType = [1, 2, 3, 4, 5];
let undefinedType;
let nullType = null;

console.log("Value: ", numberType, ", Type: ", typeof numberType);
// Output: Value:  <value of numberType>, Type: number

console.log("Value: ", stringType, ", Type: ", typeof stringType);
// Output: Value:  <value of stringType>, Type: string

console.log("Value: ", booleanType, ", Type: ", typeof booleanType);
// Output: Value:  <value of booleanType>, Type: boolean

console.log("Value: ", objectType, ", Type: ", typeof objectType);
// Output: Value:  <value of objectType>, Type: object

console.log("Value: ", arrayType, ", Type: ", typeof arrayType);
// Output: Value:  <value of arrayType>, Type: object (Arrays are a type of object in JavaScript)

console.log("Value: ", undefinedType, ", Type: ", typeof undefinedType);
// Output: Value:  <value of undefinedType>, Type: undefined

console.log("Value: ", nullType, ", Type: ", typeof nullType);
// Output: Value:  <value of nullType>, Type: object (This is a well-known quirk in JavaScript)

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let letVariable = "I can be reassigned";
console.log(letVariable); // Output: I can be reassigned
letVariable = "I've been reassigned";
console.log(letVariable); // Output: I've been reassigned

const constVariable = "I cannot be reassigned";
console.log(constVariable); // Output: I cannot be reassigned
// Uncommenting the next line will cause an error
// constVariable = "Attempting reassignment"; // Error: Assignment to constant variable.