// Problem 1

// 2629. Function Composition
var compose = function(functions) {
    
    return function(x) {
        for(let i=functions.length-1;i>=0;i--){
            x=functions[i](x);
        }
        return x;
    }
};


// Problem 2

// 2666. Allow One Function Call
var once = function(fn) {
    let count=0;
    return function(...args){
        if(count==0){
            count++;
            return fn(...args);
        }
    }
};