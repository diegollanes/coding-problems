// #905 - Sort Array By Parity
/* Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
You may return any answer array that satisfies this condition.*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let start = 0;
    let end = A.length-1
    
    while(start < end){
        if(A[start]%2 > A[end]%2){
            let temp = A[start];
            A[start] = A[end];
            A[end] = temp;
        }
        if(A[start]%2 === 0) start++;
        if(A[end]%2 !== 0) end--;
    }
    return A
};