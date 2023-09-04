/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length,
    ans = []
  if (len < 4) {
    return []
  }

  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 3; ++i) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      // i > 0 第一次取值不去重
      continue
    }
    for (let j = i + 1; j < len - 2; ++j) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue
      }

      let l = j + 1,
        r = len - 1

      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (target == sum) {
          ans.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] == nums[l + 1]) {
            ++l
          }
          while (l < r && nums[r] == [nums[r - 1]]) {
            --r
          }
          ++l
          --r
        } else if (sum < target) {
          ++l
        } else {
          --r
        }
      }
    }
  }

  return ans
}
// @lc code=end
