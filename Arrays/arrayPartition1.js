// #561 - Array Partition I
/* Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) 
which makes sum of min(ai, bi) for all i from 1 to n as large as possible.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result = 0;  
    nums.sort((x, y) => x - y);
    
    for(let i = 0; i < nums.length; i+=2){
        result = result + Math.min(nums[i],nums[i+1]);
    }   
    return result;
};