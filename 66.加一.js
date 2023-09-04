/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 数字太大了
  // let str = parseInt(digits.join('')) + 1 + ''
  // return str.split('')

  // 判断每个位置的数加一是否为0
  for (let i = digits.length - 1; i >= 0; --i) {
    // 加一不等于10则会进位
    digits[i] = (digits[i] + 1) % 10
    if (digits[i] != 0) {
      return digits
    }
  }
  digits = new Array(digits.length + 1).fill(0)
  digits[0] = 1
  return digits
}
// @lc code=end
