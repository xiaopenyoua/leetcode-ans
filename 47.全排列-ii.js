/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = []
  const len = nums.length
  nums.sort((a, b) => a - b)

  handle([], nums)

  function handle(arr, remaining) {
    if (arr.length === len) {
      ans.push(arr)
      return
    }

    for (let i = 0; i < remaining.length; i++) {
      if (i > 0 && remaining[i] === remaining[i - 1]) {
        continue
      }
      const num = remaining.filter((_, index) => index !== i)
      handle([...arr, remaining[i]], num)
    }
  }

  return ans
}
// @lc code=end
