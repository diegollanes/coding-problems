// #88 - Merge Sorted Array
/* Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left = m-1;
    let right = n-1;
    
    for(let i = (m+n-1); i >= 0; i--){
        if(left < 0){
          nums1[i] = nums2[right];
          right--;          
        } else if(right < 0){
          nums1[i] = nums1[left];
          left--;        
        } else{
            if(nums1[left] >= nums2[right]){
                nums1[i] = nums1[left];
                left--;
        } else {
                nums1[i] = nums2[right];
                right--;
         }          
    }
  }
    return nums1;   
};