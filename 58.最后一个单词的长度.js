/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // 1===
  // const arr = s.split(' ')
  // let len = arr.length - 1

  // while (len >= 0) {
  //   if (arr[len] !== '') {
  //     return arr[len].length
  //   }

  //   len--
  // }

  // return -1

  // 2==
  const arr = s.trim().split(' ')
  return arr[arr.length - 1].length
}
// @lc code=end
