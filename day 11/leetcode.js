// Problem 1

// 2634. Filter Elements from Array
var filter = function(arr, fn) {
    let filteredArr=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};


// Problem 2

//2626. Array Reduce Transformation
var reduce = function(nums, fn, init) {
    for(let i=0;i<nums.length;i++){
        init=fn(init,nums[i]);
    }
    return init;
};