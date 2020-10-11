//MERGE INTERVALS or #56 Merge Intervals (Leetcode)

/* Example 1:
Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into one [1,5].

Example 2:
Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
 
Example 3:
Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one. */

function mergeIntervals(intervals){
    if(intervals.length <= 1) return intervals;
	let array = intervals.sort((a,b) => a[0] - b[0]);

	let result = [];
	let currentArray = array[0];
	result.push(currentArray);

	for(let i = 1; i < array.length; i++){
		if(currentArray[1] >= array[i][0]){
			currentArray[1] = Math.max(currentArray[1], array[i][1]); 
		} else{
			currentArray = array[i];
			result.push(currentArray);
		}
	}
	return result;
}