/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 搜索回溯
  let ans = []

  handle(target, [], 0)

  return ans

  // 已经组合的列表 arr
  function handle(target, arr, idx) {
    if (idx === candidates.length) {
      // 数字用完了就结束
      return
    }
    if (target === 0) {
      ans.push(arr)
      return
    }
    // 跳过不用第 idx 个数（idx + 1）
    handle(target, arr, idx + 1)
    // 还用 idx 这个数，则不用 idx +1
    if (target - candidates[idx] >= 0) {
      handle(target - candidates[idx], [...arr, candidates[idx]], idx)
    }
  }
}
// @lc code=end
