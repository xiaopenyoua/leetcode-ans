/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0
  }

  if (target > nums[nums.length - 1]) {
    return nums.length
  }
  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      return mid // 数组中找到目标值的情况，直接返回下标
    }
  }
  return left
}
// @lc code=end
