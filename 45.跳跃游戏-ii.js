/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 从后往前，找最快能到达当前位置的
  let len = nums.length,
    step = 0,
    i = len - 1

  if (len === 1) {
    return step
  }

  while (i > 0) {
    // 从前往后找，第一个能达到的就是最快的
    for (let j = 0; j < i; j++) {
      if (nums[j] + j >= i) {
        i = j
        step++
        break
      }
    }
  }

  return step
}
// @lc code=end
