/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length,
    step = 0

  for (let i = 0; i < len; ++i) {
    // 当前下标小于前面能到达的位置，表示可到达当前下标
    if (i <= step) {
      step = Math.max(step, i + nums[i])

      if (step >= len - 1) {
        return true
      }
    }
  }

  return false
}
// @lc code=end
