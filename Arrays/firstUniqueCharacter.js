//#387 - FIRST UNIQUE CHARACTER IN A STRING 
/* Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.*/

var firstUniqChar = function(s) {
    let seen = {};
    for(let i = 0; i < s.length; i++){
        if(s[i] in seen){
            seen[s[i]] = -1;
        } else {
        seen[s[i]] = i;
        }
    }
    
    for(let i = 0; i < s.length; i++){
        if(seen[s[i]] !== -1){
            return seen[s[i]];
        }
    }
    return -1;
    
};

firstUniqChar('leetcode');