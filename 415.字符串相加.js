/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let l1 = num1.length - 1,
    l2 = num2.length - 1,
    carry = 0,
    ans = ''

  while (l1 >= 0 || l2 >= 0 || carry != 0) {
    const v1 = num1[l1] ? num1[l1] - 0 : 0
    const v2 = num2[l2] ? num2[l2] - 0 : 0
    const temp = v1 + v2 + carry
    ans = (temp % 10) + ans
    carry = ~~(temp / 10)

    l1--
    l2--
  }

  return ans
}
// @lc code=end
