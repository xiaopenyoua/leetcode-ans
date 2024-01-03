/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let ans = 0,
    x = 0,
    y = 0

  function dfs(x, y) {
    // 只要能达到 边界 ，就一定能走完
    if (x === m - 1 || y === n - 1) {
      ans++
      return
    }

    if (x < m - 1) {
      dfs(x + 1, y)
    }

    if (y < n - 1) {
      dfs(x, y + 1)
    }
  }

  dfs(x, y)

  return ans
}

console.log(uniquePaths(3, 2));
// @lc code=end
