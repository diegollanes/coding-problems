// # 1122 Relative Sort Array

/* Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  
Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let seen = {}
    let result = [];
    let temp = []
    
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] in seen) seen[arr1[i]] += 1;
        else seen[arr1[i]] = 1;      
    }
    
    for(let i = 0; i < arr2.length; i++){
        let freq = seen[arr2[i]];
        while(freq > 0){
            result.push(arr2[i]);
            freq--;
        }
        seen[arr2[i]] = -1;
    }
    
    for(let i = 0; i < arr1.length; i++){
        if(seen[arr1[i]] !== -1){
            temp.push(arr1[i]);
        }
    }
    temp.sort(function(a, b) {
        return a - b;
    })
    
    return result.concat(temp);    
};