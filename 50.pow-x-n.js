/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1
  }

  if (n < 0) {
    return myPow(1 / x, -n)
  }

  if (n & 1 === 1) {
    return x * myPow(x, n - 1)
  }

  return myPow(x * x, Math.floor(n / 2))
}
// @lc code=end
