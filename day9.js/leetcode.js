// Problem 1
// 2667. Create Hello World Function

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};


// Problem 2
// 2620. Counter

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};