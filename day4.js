// Day 4: Loops

// Activity 1: For Loop

// Task1: Write a program to print numbers from 1 to 10 using a for loop
for(let i=1;i<=10;i++){
    console.log(i);
}   // Output: 1 2 3 4 5 6 7 8 9 10

// Task 2: Write a program to print the multiplication table of 5 using a for loop
for(let i=5;i<=50;i+=5){
    console.log(i);
}   // Output: 5 10 15 20 25 30 35 40 45 50


// Activity 2: While loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop
let x=1;
while(x<=10){
    console.log(x);
    x++;
}   // Output: 1 2 3 4 5 6 7 8 9 10

// Task 4: Write a program to print numbers from 10 to 1 using while loop
let y=10;
while(y>=1){
    console.log(y);
    y--;
}   // Output: 10 9 8 7 6 5 4 3 2 1


// Activity 3: Do... While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do... while loop
let a=1;
do {
    console.log(a);
    a++;
} while (a<=5);     // Output: 1 2 3 4 5

// Task 6: Write a program to calculate the factorial of a number using a do... while loop
let num=5;
let fact=1
let j=1
do{
    fact*=j;
    j++;
}while(j<=num)
console.log("fact:",fact);


// Activity 4: 

// Task 7: Write a program to print a pattern using nested for loops
var s="";
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        s+="*";
    }
    console.log(s);
    s="";
}
// Output: 
// *
// **
// ***
// ****
// *****


// Activity 5: Lop Control Statements 

// Task 8: Write a program to print from 1 to 10, but skip the number 5 using continue statement
for(let i=1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
}   // Output: 1 2 3 4 6 7 8 9 10

// Task 9: Write a program to print from 1 to 10, but stop the loop when the number is 7 using break statement
for(let i=1;i<=10;i++){
    if(i==7) break;
    console.log(i);
}   // Output: 1 2 3 4 5 6 