// INTERVALS INTERSECTION
/* Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals 
sorted on their start time.

Example 1:
Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.

Example 2:
Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists. */

function intervalsIntersection(arr1, arr2){
	let left = 0;
	let right = 0;
	let result = [];

	while(left < arr1.length && right < arr2.length){
		if(arr1[left][1] >= arr2[right][0] && arr1[left][0] <= arr2[right][1]){
			result.push([Math.max(arr1[left][0], arr2[right][0]), Math.min(arr1[left][1], arr2[right][1])]);
		}
		if(arr1[left][1] > arr2[right][1]) right++;
		else left++;
	}
	return result;
}