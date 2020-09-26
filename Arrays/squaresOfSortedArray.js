// #977 - Squares of a Sorted Array
/* Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, 
also in sorted  non-decreasing order.*/

 /**
 * @param {number[]} A
 * @return {number[]}
 */
/*
var sortedSquares = function(A) {
    let start = 0;
    let end = A.length-1;
    let result = [];
    
    for(let i = A.length-1; i >= 0; i--){
        if(Math.abs(A[start]) > Math.abs(A[end])){
            result[i] = A[start] * A[start];
            start++;
        } else{
            result[i] = A[end] * A[end];
            end--;
        }
    }  
    return result;
};
*/

var sortedSquares = function(A) {
    let start = 0;
    let end = A.length-1;
    let idx = end;
    let result = [];

    
    while(start <= end){
        if(Math.abs(A[start]) > Math.abs(A[end])){
            result[idx] = A[start] * A[start];
            start++;
        } else{
            result[idx] = A[end] * A[end];
            end--;
        }
        idx--;
    }
    return result;
};