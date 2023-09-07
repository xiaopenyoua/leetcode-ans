/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ans = []

  let mm = 0, // 每次 m 增加的数
    nn = 1, // 每次 n 增加数
    m = 0, // 行
    n = 0 // 列

  while (true) {
    ans.push(matrix[m][n])
    matrix[m][n] = 'X'

    // 这个移动不一定正确
    m += mm
    n += nn

    // 判断移动的正不正确
    if (isBolck()) {
      m -= mm
      n -= nn

      // 横向
      if (mm === 0) {
        mm = nn
        nn = 0
      } else {
        nn = -mm
        mm = 0
      }

      // 再正确方向后移动
      m += mm
      n += nn

      // 移动了还是不行，那就是结束了
      if (isBolck()) {
        break
      }
    }
  }

  function isBolck() {
    return !matrix[m] || matrix[m][n] === undefined || matrix[m][n] === 'X'
  }

  return ans
}
// @lc code=end
