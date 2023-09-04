/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 边界情况
  if (s.length === 1) {
    return s
  }

  // // 双指针 slow 指向小的那
  // let slow = 0,
  //   ans = '',
  //   len = s.length
  // while (slow < len - 1) {
  //   for (let i = len; i >= slow + 1; --i) {
  //     const str = s.slice(slow, i)
  //     if (str == str.split('').reverse().join('')) {
  //       ans = ans.length < str.length ? str : ans
  //     }
  //   }

  //   ++slow
  // }

  let ans = ''
  for (let i = 0; i < s.length; ++i) {
    // 回文子串长度是奇数
    handle(i, i)
    // 回文子串长度是偶数
    handle(i, i + 1)
  }
  function handle(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      --l
      ++r
    }

    // 循环完之后，会多执行一次 --l, ++r
    ans = ans.length > s.slice(l + 1, r).length ? ans : s.slice(l + 1, r)
  }

  return ans
}
// @lc code=end
