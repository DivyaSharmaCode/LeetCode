/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var len = nums.length;
  var dp = [0, 0];
  for (var i = len - 1; i >= 0; i--) {
    dp = [Math.max(dp[0], nums[i] + dp[1]), dp[0]];
  }
  return dp[0];
};