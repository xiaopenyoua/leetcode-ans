/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
    },
    ans = []

  if (digits === '') {
    return []
  }

  handle('', 0)

  return ans

  // 两个参数，str 当前已经拼接的字符，，默认为 ‘’，i：表示第几个数字，从 0 开始
  function handle(str, i) {
    if (i === digits.length) {
      ans.push(str)
      return // 递归出口
    }

    for (const s of map[digits[i]]) {
      handle(str + s, i + 1)
    }
  }
}
// @lc code=end
