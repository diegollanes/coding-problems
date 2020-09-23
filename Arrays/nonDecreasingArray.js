// #665 - Non-decreasing Array
/* Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let counter = 0;
    
    for(let i = 0 ; i < nums.length-1; i++){
        if(nums[i] > nums[i+1]) {
            counter++;
            if(counter > 1) return false;
            
            if(i > 0 && nums[i-1] > nums[i+1]) nums[i+1] = nums[i];
            else nums[i] = nums[i+1];
        }
    }
    return true;
};