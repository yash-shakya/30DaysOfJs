// Day 11: Promises and Async/Await

// Acticity 1: Understanding Promises

// Task 1: 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This Promise resolved");
    }, 2000);
});
p1.then((message) => {
    console.log(message);
})

// Task 2
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error Occured");
    }, 2000);
});
p2.catch((message) => {
    console.log(message);
});


// Activity 2: Chaining Promises

//Task 3:
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },2000);
    })
}
console.log("Fetching Promise 1")
getdata().then((res)=>{
    console.log("Response 1:",res);
    console.log("Fetching Promise 2");
    getdata().then((res)=>{
        console.log("Response 2:",res);
        console.log("Fetching Promise 3");
        getdata().then((res)=>{
            console.log("Response 3:",res);
            console.log("Fetching Promise 4");
            getdata().then((res)=>{
                console.log("Response 4:",res);
            })
        })
    })
})


// Activity 3: Using Async/Await

// Task 4:
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task 4: Resolved");
            resolve("Success");
        },5000)
    })
}

async function Task4() {
    await api();
}
Task4();

// Task 5:
async function Task5(prom){
    try{
        await prom;
    }catch(err){
        console.log('Task 5 error:',err);
    }
}
Task5(p2);


// Activity 4: Fetching Data from an API

// Task 6:
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData();

// Task 7:

async function fetchDataAsync(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if(!response.ok) throw new Error(`Error${response.status}`);
        let data=await response.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
fetchDataAsync();


//ACTIVITY-5:Concurrent Promises

//Task-8:
function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success promise 3");
        },5000)
    });
}
const pro1 = promise3();
const pro2 = promise3();
Promise.all([pro1,pro2]).then((messages)=>{
    console.log(messages);
});

// Task 9
Promise.race([pro1,pro2]).then((messages)=>{
    console.log(messages);
});