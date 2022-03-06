/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const swap = (i, j) =>
        [nums[i],nums[j]] = [nums[j],nums[i]]

    let len = nums.length - 1, i
    for (i = len - 1; nums[i] >= nums[i+1];) i--
    let j = i + 1, k = len
    while (j < k) swap(j++,k--)
    if (i >= 0) {
        for (j = i + 1; nums[i] >= nums[j];) j++
        swap(i,j)
    }
};