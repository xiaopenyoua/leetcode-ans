/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // let arr = nums1.concat(nums2)
  // if (!arr.length) {
  //   return 0
  // }
  // if (arr.length == 1) {
  //   return arr[0]
  // }
  // arr.sort((a, b) => {
  //   return a - b
  // })
  // let mid = arr.length / 2
  // if (arr.length % 2) {
  //   return arr[Math.floor(mid)]
  // }
  // return (arr[mid - 1] + arr[mid]) / 2

  // 第 k 小数 （k 即中位数）
  let k = Math.ceil((nums1.length + nums2.length) / 2),
    len = nums1.length + nums2.length,
    midNum = 0
  while (k) {
    let floor = Math.floor(k / 2)
    if (k == 1) {
      if (len % 2) {
        // 奇数个
        const arr = [nums1[0], nums2[0]].filter((v) => !isNaN(v))

        midNum = Math.min(...arr)
      } else {
        // 偶数个
        const arr = [
          nums1[0] + nums1[1],
          nums1[0] + nums2[0],
          nums2[0] + nums2[1]
        ].filter((v) => !isNaN(v))

        midNum = Math.min(...arr) / 2
      }
      // 结束
      break
    }

    nums1[floor - 1] != undefined
      ? nums2[floor - 1] != undefined
        ? nums1[floor - 1] <= nums2[floor - 1]
          ? nums1.splice(0, floor)
          : nums2.splice(0, floor)
        : nums1.splice(0, floor)
      : nums2.splice(0, floor)

    k -= floor
  }

  return midNum
}
// @lc code=end
