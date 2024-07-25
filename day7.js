// Day 7: Objects

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console
let book={
    title:"A Brief History of Time",
    author:"Stephen Hawking",
    year:1964,
};
console.log(book);      
// Output:
// {
//     title: 'A Brief History of Time',
//     author: 'Stephen Hawking',
//     year: 1964
// } 

// Task 2: Access and log the title and author properties of the book object
let title=book.title;
console.log("title:",title);    // Output: title: A Brief History of Time
let author=book.author;
console.log("author:",author);  // Output: author: Stephen Hawking


// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author and log the result of calling this method
book.showinfo=function(){
    return `${this.title} is written by ${this.author}`;
}
console.log(book.showinfo());   // Output: A Brief History of Time is written by Stephen Hawking

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object
book.updateYear=function(year){
    this.year=year;
}
book.updateYear(1999);
console.log(book);      
// Output: 
// {
//     title: 'A Brief History of Time',
//     author: 'Stephen Hawking',
//     year: 1999,
//     showinfo: [Function (anonymous)],
//     updateYear: [Function (anonymous)]
// }

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of books), and log the library object to the console
let library={
    name:"My Library",
    books:[{
        title:"Whispers from a Graves",
        author:"Tamanna Sharma"
    },{
        title:"Wings of Fire",
        author:"Dr. A.P.J Abdul Kalam"
    },{
        
        title:"Famous Five",
        author:"Enid Blyton"
    }]
}
console.log(library);   
// Output: 
// {
//     name: 'My Library',
//     books: [
//       { title: 'Whispers from a Graves', author: 'Tamanna Sharma' },
//       { title: 'Wings of Fire', author: 'Dr. A.P.J Abdul Kalam' },
//       { title: 'Famous Five', author: 'Enid Blyton' }
//     ]
// }

// Task 6: Access and log the name of the library and the titles of all the books in the library
console.log(library.name);      // Output: My Library
for (let i of library.books){
    console.log(i.title);
}
// Output: 
// Whispers from a Graves
// Wings of Fire
// Famous Five


// Activity 4: The this Keyword 

// Task 7: Add a method to the book object that uses the this keyword
book.getyear=function(){
    return `${this.title} published in ${this.year}`;
}
console.log(book.getyear());    // Output: A Brief History of Time published in 1999


// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value
for (const key in book) {
    console.log(`${key}:${book[key]}`);
}
// Output: 
// title:A Brief History of Time
// author:Stephen Hawking
// year:1999
// showinfo:function(){
//     return `${this.title} is written by ${this.author}`;
// }
// updateYear:function(year){
//     this.year=year;
// }
// getyear:function(){
//     return `${this.title} published in ${this.year}`;
// }

// Task 9: Use Object.keys and Object.values method to log all the keys and values of the book object
const keys=Object.keys(book);
const values=Object.values(book);
console.log("keys:",keys);  // Output: keys: [ 'title', 'author', 'year', 'showinfo', 'updateYear', 'getyear' ]
console.log("values:",values);  
// Output: 
// values: [
//     'A Brief History of Time',
//     'Stephen Hawking',
//     1999,
//     [Function (anonymous)],
//     [Function (anonymous)],
//     [Function (anonymous)]
// ]