// Problem 1:

// 2665. Counter II
var createCounter = function(init) {
    let x=init;
    return {
        increment:()=>{
            x++;
            return x;
        },
        decrement:()=>{
            x--;
            return x;
        },
        reset:()=>{
            x=init;
            return x;
        }
    }
};


// Problem 2:

var map = function(arr, fn) {
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        newarr.push(fn(arr[i],i))
    }
    return newarr;
};