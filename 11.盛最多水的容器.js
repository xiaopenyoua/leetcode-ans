/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    ans = 0

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r])
    ans = ans > area ? ans : area

    if (height[l] < height[r]) {
      ++l
    } else {
      --r
    }
  }

  return ans
}
// @lc code=end
