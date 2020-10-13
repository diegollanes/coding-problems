// FIND THE SMALLEST MISSING POSITIVE NUMBER or #41 - First Missing Positive (Leetcode)
/* Given an unsorted array containing numbers, find the smallest missing positive number in it.

Example 1:
Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'

Example 2:
Input: [3, -2, 0, 1, 2]
Output: 4

Example 3:
Input: [3, 2, 5, 1]
Output: 4 */

function findSmallestMissingPositiveNumber(array){
    let i = 0;
	let length = array.length;

	while(i < length){
		let index = array[i] - 1;
		if(array[i] > 0 && array[i] < length && array[i] !== array[index]){
			let temp = array[i];
			array[i] = array[index];
			array[index] = temp;
		} else i++;
	}

	for(let i = 0; i < length; i++){
		if(array[i] !== i + 1) return i + 1;
	}
    return length + 1;
}