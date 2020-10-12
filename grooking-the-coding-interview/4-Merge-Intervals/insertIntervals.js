/*Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all 
necessary intervals to produce a list that has only mutually exclusive intervals.

Example 1:
Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

Example 2:
Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].

Example 3:
Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4]. */

function insertIntervals(intervals, newInterval){
	let i = 0;
	let n = intervals.length;
	let result = [];

	while(i < n && intervals[i][1] < newInterval[0]) {
		result.push(intervals[i]);
		i++;
	}

	let mergedInterval = newInterval;
	while(i < n && newInterval[1] >= intervals[i][0]){
		mergedInterval[0] = Math.min(mergedInterval[0], intervals[i][0]);
		mergedInterval[1] =  Math.max(mergedInterval[1], intervals[i][1]);
		i++;
	}

	result.push(mergedInterval);
	while(i < n){
		result.push(intervals[i]);
		i++;
	}
	return result;
}

// Con esta solución tengo que pasar sobre los elementos del arreglo 2 veces. Una vez para insertar en la posición correcta
// el nuevo intervalo y una segunda vez para hacer el merge del arreglo resultante. Además de que estoy usando un 
// arreglo extra donde se tiene agregado al nuevo intervalo.

function insertIntervals(intervals, newInterval){
	if(intervals.length === 0) return [newInterval];

	let newArray = [];
    let inserted = false;

	for(let i = 0; i < intervals.length; i++){
		if(newInterval[0] < intervals[i][0]){
			newArray.push(newInterval);
            inserted = true;
		}
		newArray.push(intervals[i]);
	}
    
    if(!false) newArray.push(newInterval)

	let currentInterval = newArray[0];
	let result = [currentInterval];
    
	for(let i = 1; i < newArray.length; i++){
		if(currentInterval[1] >= newArray[i][0]){
			currentInterval[1] = Math.max(currentInterval[1], newArray[i][1]);
		} else{
			currentInterval = newArray[i];
			result.push(currentInterval);
		}
	}
	return result;
}