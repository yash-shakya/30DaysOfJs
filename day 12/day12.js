// Day 12

// Activity 1: Basic error Handling with Try-Catch 

// Task 1:
function throwError(x){
    try{
        if(x>10) throw("Too large number");
        
    }catch(err){
        console.error("Catch:",err)
    }
}
throwError(16)

// Task 2:
function divide(a,b){
    try {
        if(b==0) throw("b can't be zero")
        console.log(a/b);
    } catch (error) {
        console.error("Catch:",error);
    }
}
divide(2,0);


// Activity 2: Finally Block

// Task 3:
try {
    console.log("In try block")
} catch (error) {
    console.error("In catch block:",error);
} finally{
    console.log("In finally block");
}


// Activity 3: Custom Error Objects 

// Task 4:
class customError extends Error{
    constructor(message){
        super(message);
    }
}

function divide2(a,b){
    try{
        if(b==0) throw new customError("ZeroDivision");
        console.log(a/b);
    }catch(error){
        console.error("Custom error:",error.message)
    }
}
divide2(5,0)

// Task 5:
class ValidationError extends Error{
    constructor(message){
        super(message);
    }
}
function validate(a){
    try {
        if(a==="") throw new ValidationError("Empty String");
        console.log(a)
    } catch (error) {
        console.error("Validation Error:",error.message);
    }
}
validate("");


// Activity 4: Error Handling in Promises

// Task 6:
function promise(){
    return new Promise((resolve,reject)=>{
        const random=Math.floor(1+Math.random()*2)
        if(random==1) resolve("Succesfully resolved");
        else reject(new Error("Promise rejected"));
    })
    
}
promise()
.then((res)=>{console.log(res)})
.catch((res)=>{console.log(res.message)})

// Task 7:
async function async_promise_handle() {
    try {
        const result = await promise();
        console.log("Promise resolved with:", result);
    } catch (error) {
        console.log("Promise rejected with:",error.message);
    }
}
async_promise_handle();


// Activity 5: Graceful Error Handling in Fetch

// Task 8:
function fetchData(){
    return new Promise((resolve,reject)=>{
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2024-02-26/currencies/eur.json')
        .then((res)=>{
            if(!res.ok) {reject(new Error(`HTTP error! status: ${res.status}`))}
            else {res.json().then(data=>resolve(data));}
        })
        .catch(error=>{
            reject(error);
        });
    });
}
fetchData()
.then(data=>console.log(data))
.catch(error=>console.error("Catch:",error.message));

// Task 9
async function fetchDataAsync() {
    try {
        const response= await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2024-02-26/currencies/eur.json');
        if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        let data=response.json()
        console.log(data)
    } catch (error) {
        console.error("Catch:",error.message)
    }
}
fetchDataAsync()