// FIND ALL DUPLICATE NUMBERS or #442 Find All Duplicates in an Array (Leetcode)
/* We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
The array has some duplicates, find all the duplicate numbers without using any extra space.

Example 1:
Input: [3, 4, 4, 5, 5]
Output: [4, 5]

Example 2:
Input: [5, 4, 7, 2, 3, 5, 3]
Output: [3, 5] */

function findAllDuplicateNumbers(array){
    let i = 0;
	let result = [];

	while(i < array.length){
		let index = array[i] - 1;
		if(array[i] !== array[index]){
			let temp = array[i];
			array[i] = array[index];
			array[index] = temp;
		} else i++;
	}

	for(let i = 0; i < array.length; i++){
		if(array[i] !== i + 1){
			result.push(array[i]);
		}
	}
	return result; 
}