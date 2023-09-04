/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0
  while (x != 0) {
    const end = x % 10 // 取 x 最后一位数,
    x = ~~(x / 10) // ~ 是按位取反,~~2次取反 粗略的说是保持原值,~后面如果跟的值不是int类型 会被强制转换为int类型
    console.log(end, x)
    ans = ans * 10 + end
    if (ans > Math.pow(2, 31) - 1 || ans < Math.pow(-2, 31)) {
      return 0
    }
  }

  return ans
}
// @lc code=end
