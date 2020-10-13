// MISSING NUMBER
/* We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Example 1:
Input: [4, 0, 3, 1]
Output: 2

Example 2:
Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7*/

function missingNumber(nums) {
    let sumIncludingMissing = nums.length;
    let actualSum = 0;
    
    for(let i = 0; i < nums.length; i++){
        sumIncludingMissing += i;
        actualSum += nums[i];
    }
    return sumIncludingMissing - actualSum;
};

// Otra forma de resolverlo pero al tener que ordenar los elementos el Time Complexity = O(n Log(n))

function missingNumber(nums){
	nums.sort((a,b) => a - b);
	
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== i) return i;
    }
    return nums.length;
}