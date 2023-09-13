/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals
  }

  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  let i = 1
  // 合并只剩一个区间或者 最后一个区间不用再合并
  while (i < intervals.length && intervals.length >= 2) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      // 取最大
      intervals[i - 1][1] = Math.max(intervals[i][1], intervals[i - 1][1])
      intervals.splice(i, 1)
    } else {
      i++
    }
  }

  return intervals
}
// @lc code=end
