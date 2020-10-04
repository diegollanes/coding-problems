 //  NO-REPEAT SUBSTRING  or #3 LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS(Leetcode)
/* Given a string, find the length of the longest substring which has no repeating characters.
Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".*/

function noRepeatSubstring(s){
	let windowStart = 0;
	let windowEnd = 0;
	let longest = Number.MIN_VALUE;
	let map = {};

	while(windowEnd < s.length){
		if(!(s[windowEnd] in map)){
			map[s[windowEnd]] = 1;
			longest = Math.max(longest, windowEnd - windowStart + 1);
			windowEnd++;
		} else {
			delete map[s[windowStart]];
			windowStart++;
		}
	}
	return (longest === Number.MIN_VALUE) ? 0 : longest;
}

/// My first solution \\\
/*
var lengthOfLongestSubstring = function(s) { 
    let map = {};
    let windowStart = 0;
    let longestSubstring = Number.MIN_VALUE;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] in map) map[s[i]] +=1;
        else map[s[i]] = 1;
        
        while(map[s[i]] > 1){
            map[s[windowStart]] -= 1;
            windowStart++;
        }
        
        longestSubstring = Math.max(longestSubstring, i - windowStart + 1);
    }
    return longestSubstring     
};*/
