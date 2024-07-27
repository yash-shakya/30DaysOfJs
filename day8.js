// Day 8: ES6+ Features

// Activity 1: Tempelate Literals

// Task 1:
let name="Yash",age=18;
const str1=`name:${name}, age:${age}`;
console.log(str1);

// Task 2:
const str2=`Hello World!,
Yash this side`;
console.log(str2);


// Activity 2: Destructuring

// Task 3:
const nums = [1,2,3];
const [first,second,third] = nums;
console.log(first,second);

// Task 4:
const book = {
    bookName: 'Whisphers from a Grave',
    Author: 'Tamanna Sharma',
}; 
const {bookName,Author} = book;
console.log(bookName,"by",Author);


// Activity 3: Spread and Rest Operators

// Task 5:
const arr1 = [1,2,3];
const arr2 = [];
arr2.push(...arr1,4,5);
console.log(arr2);

// Task 6:
function sum(...args){
    return args.reduce((e1,e2)=>{
        return e1+e2;
    });
}
console.log(sum(1,2,3,4));


// Activity 4: Default Parameters

// Task 7: 
function product(a,b=1){
    return a*b;
}
console.log("with param:",product(4,5));
console.log("without param:",product(3));


// Activity 5: Enhanced Object Literals

// Task 8:
let Name = "Yash";
let Age = 18;
const obj = {Name,
    Age,
    introduce(){
    console.log(`name: ${Name} age: ${Age}`)
}};

console.log(obj);

// Task 9:
const propName1 = 'name';
const propName2 = 'age';
const propName3 = 'location';

const person = {
  [propName1]: 'Ayush',
  [propName2]: 19,
  [propName3]: 'Gwalior'
};

console.log(person); 