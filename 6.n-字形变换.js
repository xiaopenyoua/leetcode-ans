/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // 边界情况
  if (s.length <= numRows || numRows === 1) {
    return s
  }
  // let ans = new Array(numRows).fill('')

  // 1.****
  // // 循环一个周期字符总数
  // const n = numRows + numRows - 2
  // for (let i = 0; i < s.length; ++i) {
  //   // 确定字符在周期的位置
  //   const x = i % n,
  //     y = Math.min(x, n - x) // n - x 即相当于 n, n-1 n-2 n-3 .. 0
  //   ans[y] += s[i]
  // }

  // 2.**** 01232101232
  // 循环一个周期字符总数

  let flag = 1, //控制标记的变化方向 1+  -1 -
    len = s.length,
    flags = new Array(len)

  flags[0] = 1
  for (let i = 1; i < len; ++i) {
    // 从1开始，一直增加到numRows开始减少，减少到1 又开始增加
    if (flags[i - 1] == 1) {
      flag = 1
    } else if (flags[i - 1] == numRows) {
      flag = -1
    }

    flags[i] = flags[i - 1] + flag
  }

  // j表示行数，把属于该行的字符拼接起来
  let j = 1,
    ans = ''
  while (j <= numRows) {
    for (let k = 0; k < len; ++k) {
      if (flags[k] == j) {
        ans += s.charAt(k)
      }
    }

    j++
  }

  return ans
}
// @lc code=end
