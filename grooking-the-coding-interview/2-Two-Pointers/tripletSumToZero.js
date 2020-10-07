// TRIPLET SUM TO ZERO
/* Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
Explanation: There are four unique triplets whose sum is equal to zero.

Example 2:
Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.*/

function tripletSumToZero(array){
    let nums =  array.sort((a,b) => a-b);
	let i = 0;
	let result = [];

	while(nums[i] <= 0) {
	  let left = i + 1;
	  let right = nums.length-1;
	  let wantedValue = 0 - nums[i];
        
      if(i === 0 || ( i > 0 && nums[i] !== nums[i-1])){
		 while(left < right){
			let sum = nums[left] + nums[right];
            
			if(sum === wantedValue){
			result.push([nums[i],nums[left],nums[right]]);
    	    left++;
            while (nums[left] === nums[left-1]) left++;                
			} else if(sum < wantedValue) left++;
			  else right--;
		   }   
        }
        
	 i++; 
   }
  return result;
}