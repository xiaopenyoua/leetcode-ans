/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length
  for (let i = len - 1; i > 0; --i) {
    if (nums[i] == nums[i - 1]) {
      continue
    }

    if (nums[i] > nums[i - 1]) {
      let j = len - 1,
        r = len - 1
      while (j >= i && nums[j] <= nums[i - 1]) {
        j--
      }
      ;[nums[i - 1], nums[j]] = [nums[j], nums[i - 1]]
      console.log(nums, j, i - 1)
      // 后面的排序
      while (i < r) {
        ;[nums[i], nums[r]] = [nums[r], nums[i]]
        i++
        r--
      }
      return nums
    }
  }

  return nums.sort((a, b) => a - b)
}
// @lc code=end
