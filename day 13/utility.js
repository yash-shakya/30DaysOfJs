function addition(a,b){
    return a+b;
}

const Person={
    name:"Yash Shakya",
    age:18,
    branch:"CSE",
    introduce(){
        console.log(`Hey!, I'm ${this.name}`)
    }
}

export default function greet(name){
    console.log(`Hello ${name}, have a nice day!`);
}

function multiply(a,b){
    return a*b;
}

export{
    addition,
    Person,
    multiply
}