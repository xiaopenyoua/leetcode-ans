/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => {
    return a - b
  })

  let ans = Math.pow(2, 31) - 1,
    len = nums.length

  for (let i = 0; i < len - 2; ++i) {
    let l = i + 1,
      r = len - 1

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      const x = Math.abs(sum - target)
      ans = Math.abs(ans - target) <= x ? ans : sum

      if (!x) {
        return target
      }

      // *******
      if (sum - target > 0) {
        --r
      } else {
        ++l
      }
    }
  }
  return ans
}
// @lc code=end
