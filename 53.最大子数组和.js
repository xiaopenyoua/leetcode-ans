/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // let n = nums.length,
  //   ans = -Math.pow(10, 4)

  // // 默认整个数组是最优解，再逐次递减
  // let i = n
  // while (i) {
  //   for (let j = 0; j < n - i + 1; j++) {
  //     ans = Math.max(ans, sum(j, j + i - 1))
  //   }

  //   --i
  // }

  // function sum(start, end) {
  //   let total = 0
  //   for (let i = start; i <= end; i++) {
  //     total += nums[i]
  //   }
  //   console.log(start, end, total)
  //   return total
  // }

  // return ans

  // ------------------------------
  // f(i) 代表以第 i 个数结尾的「连续子数组的最大和」
  // f(i)=max{f(i−1)+nums[i],nums[i]}

  let pre = 0,
    ans = nums[0]

  nums.forEach((n) => {
    // 如果前边累加后还不如自己本身大，那就把前边的都扔掉，从此自己本身重新开始累加。
    pre = Math.max(pre + n, n) // f(i)=max{f(i−1)+nums[i],nums[i]}

    ans = Math.max(ans, pre)
  })

  return ans
}
// @lc code=end
