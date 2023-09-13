/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const res = []
  let i = 0
  const len = intervals.length

  while (i < len && intervals[i][1] < newInterval[0]) {
    // 当前遍历的是左边的，不重叠的区间
    res.push(intervals[i])
    i++
  }

  while (i < len && intervals[i][0] <= newInterval[1]) {
    // 当前遍历是有重叠的区间
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]) //左端取较小者，更新给兰区间的左端
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]) //右端取较大者，更新给兰区间的右端
    i++
  }
  res.push(newInterval) // 循环结束后，兰区间为合并后的区间，推入res

  while (i < len) {
    // 遍历右边，没重叠的区间
    res.push(intervals[i])
    i++
  }

  return res
}
// @lc code=end
