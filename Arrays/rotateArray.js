//  #189 - ROTATE ARRAY 
// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    reverse(nums,0,nums.length-1);
    k = k%nums.length;
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
            
    function reverse(array, start, end){
        while(start < end){
            let temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
        }        
    }
};