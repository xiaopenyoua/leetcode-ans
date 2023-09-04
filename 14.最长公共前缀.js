/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 字符串数组长度为0，没有前缀
  if (!strs.length) {
    return ''
  }
  // 字符串数组长度为0，全是前缀
  if (strs.length === 1) {
    return strs[0]
  }
  // 最短的字符在最前面
  strs.sort((a, b) => {
    return a.length < b.length
  })

  const minStr = strs[0] // 最短字符串
  const minLen = minStr.length // 最短字符串长度

  // 从右往左依次减少字符去匹配，出现匹配的立即返回公共前缀
  for (let i = minLen; i > 0; --i) {
    let allPrefix = true // 出现不匹配的置为false
    for (let j = 1; j < strs.length; j++) {
      // 第一个不参与对比
      if (strs[j].substr(0, i) !== minStr.substr(0, i)) {
        allPrefix = false
        break
      }
    }
    if (allPrefix) {
      return minStr.substr(0, i)
    }
  }

  return ''
}
// @lc code=end
