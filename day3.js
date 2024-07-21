// Day 3: Control Structures

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console
let a=-4;
console.log(`The value of a is ${a}`);  // Output: The value of a is -4
if(a>0){
    console.log("Number is positive");  
}
else if(a<0){
    console.log("Number is Negative");  
}
else{
    console.log("Number is zero");  
}   // Output: Number is Negative

// Task 2: Write a program to check if a person is eligible to vote (age>=18) and log the result to console
let age=21;
console.log(`Age is ${age}`);   // Output: Age is 21
if(age>=18){
    console.log("You can Vote!");  
}
else{
    console.log("You cannot vote!");   
}    // Output: You can Vote!


// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements
let x=5;
let y=3;
let z=21;
if(x>y && x>z){
    console.log("x is the largest");     
}
else{
    if(y>z){
        console.log("y is the largest");    
    }
    else{
        console.log("z is the largest");    
    }
}   // Output: z is the largest


// Activity 3: Switch Case

// Task 4: Write a program that uses switch case to determine the day of the week based on a number (1-7) and log the day name to the console
let day=4;
switch (day) {
    case 1:
        console.log("Sunday");  
        break;
    case 2:
        console.log("Monday");  
        break;
    case 3:
        console.log("Tuesday"); 
        break;
    case 4:
        console.log("Wednesday");  
        break;
    case 5:
        console.log("Thursday");   
        break;
    case 6:
        console.log("Friday");  
        break;
    case 7:
        console.log("Saturday");    
        break;

    default:
        console.log("Invalid input");  
        break;
}   // Output: Wednesday

// Task 5: Write a program that uses a switch case to assign a grade('A','B','C','D','F') based on a score and log the grade to the console
let marks=45;
switch (true) {
    case marks>=90:
        console.log("A");  
        break;
    case marks>=80:
        console.log("B");   
        break;
    case marks>=65:
        console.log("C");   
        break;
    case marks>=40:
        console.log("D");   
        break;
    case marks<40:
        console.log("F");   
        break;
    default:
        console.log("Invalid MARKS");   
}   // Output: D


// Activity 4: Conditional (Ternanry) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
let num=17;
num%2==0? console.log("even") : console.log("odd"); // Output: odd


// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console
let year=1986;
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("Leap year");
        }
        else{
            console.log("Not a Leap year");
        }
    }
    else{
        console.log("Leap year");
    }
}
else{
    console.log("Not a Leap year");
}   // Output: Not a Leap year