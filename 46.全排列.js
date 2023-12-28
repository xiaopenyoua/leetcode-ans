/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = []
  const len = nums.length

  handle([])

  function handle(arr) {
    if (arr.length === len) {
      // 出口
      ans.push(arr)
      return
    }

    for (const s of nums) {
      if (!arr.includes(s)) {
        // 递归
        handle([...arr, s])
      }
    }
  }

  return ans
}
// @lc code=end
