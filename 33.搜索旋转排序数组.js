/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length
  if (!n) {
    return -1
  }
  if (n === 1) {
    return nums[0] === target ? 0 : -1
  }

  let l = 0,
    r = n - 1

  while (l <= r) {
    let mid = Math.ceil((l + r) / 2)

    if (nums[mid] === target) return mid
    // ==> 从左开始，数值依次增大 ,<=== 从右开始，依次减小
    if (nums[0] <= nums[mid]) {
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return -1
}
// @lc code=end
