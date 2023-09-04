/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 正常情况是把所有字符表示的数值相加
  // 特殊情况 比如 IV 表示 4，即左边数小于右边的数（相当于右边减去左边，即左边的值为负数）
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])
  let num = 0
  for (let i = 0; i < s.length; ++i) {
    const value = map.get(s[i])
    if (value < map.get(s[i + 1]) && i < s.length - 1) {
      num -= map.get(s[i])
    } else {
      num += map.get(s[i])
    }
  }

  return num
}
// @lc code=end
