/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim()
  let flag = 1 // 正负符号，默认是正数
  if (s.startsWith('-') || s.startsWith('+')) {
    flag = s.startsWith('-') ? -1 : 1
    s = s.slice(1)
  }
  let ans = 0
  while (s.length && !isNaN(s[0])) {
    ans += s[0]
    console.log(ans, 'ans')
    if (flag == -1 && -parseInt(ans) <= Math.pow(-2, 31)) {
      return Math.pow(-2, 31)
    }
    if (flag == 1 && parseInt(ans) >= Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1
    }
    s = s.slice(1)
  }

  return flag * parseInt(ans)
}
// @lc code=end
