// FIND ALL MISSING NUMBERS
/* We are given an unsorted array containing numbers taken from the range 1 to ‘n’. 
The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.
Example 1:
Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
Example 2:
Input: [2, 4, 1, 2]
Output: 3
Example 3:
Input: [2, 3, 2, 1]
Output: 4 */


function findAllMissingNumbers(nums){
	let i = 0;
	let result = [];

	while(i < nums.length){
		let index = nums[i] - 1;
		if(nums[i] !== nums[index]){
			let temp = nums[i];
			nums[i] = nums[index];
			nums[index] = temp;
		} else i++;
	}

	for(let i = 0 ; i < nums.length; i++){
		if(nums[i] !== i + 1){
			result.push(i+1);
		}
	}
	return result;
}

function findAllMissingNumbers(nums){
	let i = 0;
	let result = [];

	while(i < nums.length){
		if(nums[i] !== i+1){
			let index = nums[i] - 1;
			if(nums[index] === nums[i]) i++;
		    else{
				let temp = nums[i];
				nums[i] = nums[index];
				nums[index] = temp;
			}
		} else i++;
	}

	for(let i = 0 ; i < nums.length; i++){
		if(nums[i] !== i + 1){
			result.push(i+1);
		}
	}
	return result;
}