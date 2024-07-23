// Day 5: Functions

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd adn log the result to the console
function check(num){
    if(num%2==0) return "even";
    else return "odd";
}
console.log(check(5));  // Output: odd

// Task 2: Write a function to calculate the square of a number and return the result
function square(num){
    return num**2;
}
console.log(square(6)); // Output: 36


// Activity 2: Function Expressions

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function findMax(num1, num2) {
    if(num1>num2) return num1;
    else return num2;
}
console.log(findMax(7,5));  // Output: 7

// Task 4: Write a function expression to concatenate two strings and return the result.
function concatenateStrings(str1, str2) {
    return str1 + str2;
} 
console.log(concatenateStrings("Hello ", "World")); // Output: Hello World


// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (num1,num2) => num1+num2;
console.log(sum(15,31));    // Output: 46

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let checkChar = (str, char) => str.includes(char);
console.log(checkChar("Javascript", "s"));  // Output: true


// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(num1, num2 = 7) {
    return num1 * num2;
}
console.log(multiply(3));   // Output: 21

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = 18) {
    return `Hi ${name}, you are ${age} years old.`;
}
console.log(greet("Yash"));     // Output: Hi Yash, you are 18 years old.


// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function repeat(funcn, num) {
    for (let i = 0; i < num; i++) {
        funcn();
    }
}
function print() {
    console.log("Javascript");
}
repeat(print, 5); 
// Output:
// Javascript
// Javascript
// Javascript
// Javascript
// Javascript

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
function addTwo(x) {
    return x + 2;
}
function multiplyByFive(x) {
    return x * 5;
}
const res = applyFunctions(addTwo, multiplyByFive, 7); // (7 + 2) * 5 = 45
console.log(res);   // Output: 45