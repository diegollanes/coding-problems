// Maximum Sum Subarray of Size K

/* Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:
Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].*/

function maximumSubarray(array, k){
	let maximumSum = Number.MIN_VALUE;
	let currentSum = 0;

	for(let i = 0; i < array.length; i++){
		currentSum += array[i];
		if(i >= k-1){
			maximumSum = Math.max(maximumSum, currentSum);
			currentSum = currentSum - array[i-(k-1)];
		}
	}
	return maximumSum;
}

maximumSubarray([2, 3, 4, 1, 5],2);