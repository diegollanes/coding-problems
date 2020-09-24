// #349 - Intersection of Two Arrays
// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = {};
    let result = [];
  for (let i = 0; i < nums1.length; i++) {
      map[nums1[i]] = 1;
  }
    
  for (let i = 0; i <nums2.length; i++) {
      if(map[nums2[i]] === 1) {
          result.push(nums2[i]);
          map[nums2[i]] = -1;
      }
  }

  return result; 
};