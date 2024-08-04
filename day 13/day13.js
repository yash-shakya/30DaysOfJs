// Day 13: Modules

// Activity 1: Creating and Exporting Modules
import { addition,Person } from "./utility.js";
import { addition as add } from "./utility.js";
import greet from "./utility.js";
import * as utility from "./utility.js"

// Task 1:
console.log(addition(4,8));     // Output: 12

// Task 2:
console.log(Person);    
// Output: 
// {
//     name: 'Yash Shakya',
//     age: 18,
//     branch: 'CSE',
//     introduce: [Function: introduce]
// }


// Activity 2: Name and Default Exports

// Task 3:
console.log(add(8,12))  // Output: 20

// Task 4:
greet("Yash")   // Output: Hello Yash, have a nice day!


// Activity 3: Importing Entire Modules

// Task 5:
console.log(utility.multiply(5,9))      // Output: 45


// Activity 4: Using Third-Party Modules

// Task 6:
import _ from "lodash";
let arr=[1,2,3,4,5,6]
_.reverse(arr);
console.log(arr);   // Output: [ 6, 5, 4, 3, 2, 1 ]

// Task 7:
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});
// Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }