/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 情况一：顺时针转 90 度：先转置(这种对角线 \)再左右镜像
  // 情况二：顺时针转 180 度:先上下镜像，再左右镜像（先左右再上下也可）
  // 情况三：顺时针转 270 度：先转置再上下镜像
  let n = matrix.length,
    m = Math.floor(n / 2)

  // 转置，第 i 行的 [i ,i] 位置开始，做[i ,j] => [j, i]操作
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  // 左右镜像, i 不变， j => n - j - 1
  // 上下镜像, j 不变， i => n - i - 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ;[matrix[i][j], matrix[i][n - j - 1]] = [
        matrix[i][n - j - 1],
        matrix[i][j]
      ]
    }
  }

  return matrix
}
// @lc code=end
