// #283 - Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function(nums) {
    let pointer = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[i];
            nums[i] = nums[pointer];
            nums[pointer] = temp;
            pointer++;            
        }
    }
};

moveZeroes([0,1,0,3,12]);