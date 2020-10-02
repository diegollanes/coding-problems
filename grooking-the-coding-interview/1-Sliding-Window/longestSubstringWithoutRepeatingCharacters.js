//# 3 Longest Substring Without Repeating Characters (Leetcode)
/* Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

/**
 * @param {string} s
 * @return {number}
 */
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
};