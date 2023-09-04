/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length
  }
  // 队列的思想(先进先出) 遇到重复的则去掉重复之前的值
  const stack = []
  let max = 0
  for (let i = 0; i < s.length; ++i) {
    if (stack.indexOf(s[i]) != -1) {
      max = max >= stack.length ? max : stack.length
      stack.splice(0, stack.indexOf(s[i]) + 1)
      stack.push(s[i])
    } else {
      stack.push(s[i])
    }
  }

  return max >= stack.length ? max : stack.length
}
// @lc code=end
