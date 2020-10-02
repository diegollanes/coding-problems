// LONGEST SUBSTRING WITH K DISTINCT CHARACTERS
/* Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:
Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".*/

function longestSubstringWithKDistinctCharacters(str,k){
	let windowStart = 0;
	let longestSubstring = Number.MIN_VALUE;
	let aux_K = 0;
	let map = {};

	for(let windowEnd = 0; i < windowEnd; i++){
		if(str[windowEnd] in map){
			map[str[windowEnd]] +=1;
		} else{
			map[str[windowEnd]] = 1;
			aux_K++;
		}

		while(aux_K > k){
			map[str[windowStart]] -=1;

			if(map[str[windowStart]] === 0){
				delete map[str[windowStart]];
				aux_K--;
			}
			windowStart++;
		}
		longestSubstring = Math.max(longestSubstring, windowEnd -  windowStart + 1);
	}
	return longestSubstring;
}