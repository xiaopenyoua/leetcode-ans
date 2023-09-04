/*
 * @lc app=leetcode.cn id=1921 lang=javascript
 *
 * [1921] 消灭怪物的最大数量
 */

// @lc code=start
/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  let len = dist.length,
    steps = new Array(len)

  //  遍历数组，求每个怪物到达需要的步数
  for (let i = 0; i < len; ++i) {
    steps[i] = Math.ceil(dist[i] / speed[i])
  }

  steps.sort((a, b) => a - b)

  for (let i = 0; i < len; ++i) {
    // 小于必须操作的步数 i+1
    if (steps[i] < i + 1) {
      return i
    }
  }

  return len
}
// @lc code=end
