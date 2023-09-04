/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 直接拼接字符串，会得到一个反向字符，需要最后再进行翻转
  let ans = '', // 结果
    carry = 0 // 进位

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; --i, --j) {
    // 当前总值 是 两数再加上进位
    let sum = carry
    sum += i >= 0 ? parseInt(a[i]) : 0
    sum += j >= 0 ? parseInt(b[j]) : 0
    // 当前位字符
    ans += sum % 2
    // 进位
    carry = Math.floor(sum / 2)
  }

  // 最后判断最后一次相加的进位
  ans += carry == 1 ? carry : ''

  // reverse 是数组才有的方法
  return ans.split('').reverse().join('')
}
// @lc code=end
