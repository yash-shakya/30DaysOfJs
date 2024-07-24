// Day 6: Array

// Activity 1: Array creation and access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console
let arr1=[1,2,3,4,5];
console.log(arr1);  // Output: [ 1, 2, 3, 4, 5 ]

// Task 2: Access the first and last elements of the array and log them to console
let firstElem=arr1[0];
let lastElem=arr1[arr1.length-1];
console.log("first element:",firstElem);    // Output: first element: 1
console.log("last element:",lastElem);      // Output: last element: 5


// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array
arr1.push(6);
console.log("updated array:",arr1);     // Output: updated array: [ 1, 2, 3, 4, 5, 6 ]

// Task 4: Use pop method to remove the last element from the array and log the updated array
arr1.pop();
console.log("updated array:",arr1);     // Output: updated array: [ 1, 2, 3, 4, 5 ]

// Task 5: Use the shift method to remove the first element from the array and log the updated array
arr1.shift();
console.log("updated array:",arr1);     // Output: updated array: [ 2, 3, 4, 5 ]

// Task 6: Use the unshift method to add a new number to the begining of the array and log the updated array
arr1.unshift(7);
console.log("updated array:",arr1);     // Output: updated array: [ 7, 2, 3, 4, 5 ]


// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array
let arr2=arr1.map((val)=>val*2);
console.log("after map:",arr2);     // Output: after map: [ 14, 4, 6, 8, 10 ]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array
let arr3=arr1.filter((val)=>{
    if(val%2==0){
        return val;
    }
});
console.log("after filter",arr3);   // Output: after filter [ 2, 4 ]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result
let sum=arr1.reduce((a,b)=>a+b);
console.log("sum:",sum);    // Output: sum: 21


// Activity 4: Array Iteration

// Task 10: Use a for loop  to iterate over the array and log each element to console
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
// Output:
// 7
// 2
// 3
// 4
// 5

// Task 11: Use a forEach method to iterate over the array and log each element to the console
arr1.forEach((val)=>{console.log(val)});
// Output:
// 7
// 2
// 3
// 4
// 5


// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two dimensional array (matrix) and log the entire array to the console
let arr4=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr4);      // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Task 13: Access and log a specific element from the two-dimensional array
console.log(arr4[1][2]);    // Output: 6