/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // // 定义两个变量来存储下标位置 --- 暴力破解
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (target == nums[i] + nums[j]) {
  //       return [i, j]
  //     }
  //   }
  // }

  // return [-1, -1]

  // hashMap
  // 定义一个 Map()
  // 计算两数之差，并在map 里查找
  // 查找不到，则以当前值为key，下标为 value 存入 map

  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i]
    if (map.has(targetNum)) {
      return [map.get(targetNum), i]
    } else {
      map.set(nums[i], i)
    }
  }

  return [-1, -1]
}
// @lc code=end
