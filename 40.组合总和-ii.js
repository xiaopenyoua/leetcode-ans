/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  console.log(candidates)
  let ans = []

  // for (let i = 0; i < candidates.length; i++) {
  handle(target, [], 0)
  // }

  return ans

  function handle(target, arr, idx) {
    console.log(target, arr, idx)
    // 这里+1 是为了 能选择最后一个数
    if (idx === candidates.length + 1) {
      return
    }

    if (target === 0) {
      ans.push(arr)
      return
    }

    // 跳过这个数,
    let i = idx

    while (candidates[i] == candidates[i + 1] && i < candidates.length - 1) {
      i++
    }

    // console.log(i, arr, target)

    // 也有决定以哪个数开头的作用
    handle(target, arr, i + 1)

    if (target - candidates[idx] >= 0) {
      // console.log(candidates[idx], i, arr);
      handle(target - candidates[idx], [...arr, candidates[idx]], idx + 1)
    }
  }
}
// @lc code=end
