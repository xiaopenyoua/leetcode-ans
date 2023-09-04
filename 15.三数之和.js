/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length === 3) {
    if (nums[0] + nums[1] + nums[2] === 0) {
      return [nums]
    }
  }
  nums.sort((a, b) => a - b) // **排序**
  const ans = []

  for (let i = 0; i < nums.length - 2; ++i) {
    if (nums[i] > 0) {
      // 三个数最小的数都大于0 那相加必然不会大于0了
      break
    }
    // 去重
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    let l = i + 1,
      r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]

      if (sum == 0) {
        ans.push([nums[i], nums[l], nums[r]])
        // 去重
        while (l < r && nums[l] == nums[l + 1]) {
          ++l
        }
        while (l < r && nums[r] == nums[r - 1]) {
          --r
        }

        ++l // 退出条件是nums[L] != nums[L+1]，不会执行循环体L++，这样使得L只能达到重复元素的最后一个，要再执行一次L++才能达到第一个与nums[L]不重复的元素
        --r
      } else if (sum < 0) {
        ++l
      } else if (sum > 0) {
        --r
      }
    }
  }

  return ans
}
// @lc code=end
