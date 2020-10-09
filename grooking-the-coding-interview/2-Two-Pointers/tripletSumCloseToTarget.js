// TRIPLET SUM CLOSE TO TARGET
/*Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target 
number as possible, return the sum of the triplet. 
If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

Example 2:
Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

Example 3:
Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.*/

function tripletSumCloseToTarget(nums, target){
  let array = nums.sort((a,b) => a - b);
  let minDif = Number.MAX_VALUE;
  let result = null;

  for(let i = 0; i < array.length-2 && minDif !== 0; i++){
    let left = i + 1;
    let right = array.length-1;

    while(left < right){
      let sum = array[i] + array[left] + array[right];
      let dif = target - sum;
      if(Math.abs(dif) < minDif){
        minDif = Math.abs(dif);
        result = sum;
      } if(sum < target) left++;
      else right--;
    }
  }
  return result;
}