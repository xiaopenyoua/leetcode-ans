/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let n = nums.length,
    l = 0,
    r = n - 1
  while (l <= r && nums[l] <= target && target <= nums[r]) {
    if (nums[l] === target && nums[r] === target) {
      return [l, r]
    }
    if (nums[l] < target) {
      ++l
    }
    if (target < nums[r]) {
      --r
    }
  }

  return [-1, -1]
}
// @lc code=end
