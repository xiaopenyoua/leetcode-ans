/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length
  // 字符串长度必须是偶数
  if (len % 2 === 1) {
    return false
  }

  // 1. 替换掉 () {} []
  // for (let i = 0; i < len / 2; ++i) {
  //   s = s.replace('()', '').replace('[]', '').replace('{}', '')
  // }

  // return !s.length

  // 2. 栈的思想 -- 遇到左括号压入栈，遇到右括号则删除右括号（即数组最后一位）
  // 当我们遇到一个右括号时，我们需要将一个相同类型的左括号闭合
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])

  const stack = []

  for (let str of s) {
    // 区分左右括号
    if (map.has(str)) {
      // 右括号抵消左括号(出栈)
      // 栈里必须有东西 并且栈顶必须是对应的左括号
      if (!stack.length || stack[stack.length - 1] !== map.get(str)) {
        return false
      } else {
        stack.pop()
      }
    } else {
      // 左括号入栈
      stack.push(str)
    }
  }

  return !stack.length
}
// @lc code=end
