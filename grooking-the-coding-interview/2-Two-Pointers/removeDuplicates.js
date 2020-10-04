// REMOVE DUPLICATES
/* Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; 
after removing the duplicates in-place return the new length of the array.

NOTA: NO ES NECESARIO ELIMNAR LOS ELEMENTOS QUE QUEDAN AL FINAL DEL ARREGLO

Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:
Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].*/

var removeDuplicates = function(nums) {
    let left = 0;

	for(let i = 1; i < nums.length; i++){
		if(nums[left] !== nums[i]){
			left++;
			nums[left] = nums[i];
		}
	}
	return left+1; 
};


// Función que sí deja al arreglo únicamente con números NO repetidos y no retorna únicamente el índice
/*
function removeDuplicates(array){
	let left = 0;
  let length = array.length;

	for(let i = 1; i < length; i++){
		if(array[left] !== array[i]){
			left++;
			array[left] = array[i];
		}
	}

  for(let i = left+1; i < length; i++){
    array.pop();
  }

	return array.length;
}*/