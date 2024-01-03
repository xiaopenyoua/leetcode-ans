/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }

  let ans = '0',
    m = num1.length,
    n = num2.length

  for (let i = n - 1; i >= 0; i--) {
    const currentAns = Array(n - i - 1).fill(0)
    const y = num2[i] - 0
    let carry = 0

    for (let j = m - 1; j >= 0; j--) {
      const x = num1[j] - 0
      const temp = x * y + carry
      currentAns.push(temp % 10)
      carry = ~~(temp / 10)
    }

    if (carry != 0) {
      currentAns.push(carry)
    }

    ans = add(ans, currentAns.reverse().join(''))
  }

  function add(str1, str2) {
    let l1 = str1.length - 1,
      l2 = str2.length - 1,
      ans = '',
      carry = 0
    while (l1 >= 0 || l2 >= 0 || carry != 0) {
      const val1 = str1[l1] ? str1[l1] - 0 : 0
      const val2 = str2[l2] ? str2[l2] - 0 : 0
      const temp = val1 + val2 + carry
      ans += temp % 10
      carry = ~~(temp / 10)
      l1--
      l2--
    }

    return ans.split('').reverse().join('')
  }

  return ans
}
// @lc code=end
