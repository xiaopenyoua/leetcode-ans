/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const ans = new Array(n).fill(0).map(() => new Array(n).fill(0))

  let i = 0, // 行
    j = 0, // 列
    ii = 0, // 行前进步数
    jj = 1, // 前进步数
    count = 1 // 要填充的数

  while (true) {
    ans[i][j] = count++

    // 不管对错先走一步
    i += ii
    j += jj

    // 判断走对没有，并更正
    if (isBlock()) {
      // 走错了，回到上一步
      i -= ii
      j -= jj

      // 确定正确的前进方向
      // 横向
      if (ii === 0) {
        ii = jj
        jj = 0
      } else {
        jj = -ii
        ii = 0
      }

      // 朝着正确的方向前进一步
      i += ii
      j += jj

      // 如果还是不对，那就是遍历完了
      if (isBlock()) {
        break
      }
    }

    // 判断是否要转弯
    function isBlock() {
      return !ans[i] || ans[i][j] !== 0
    }
  }

  return ans
}
// @lc code=end
