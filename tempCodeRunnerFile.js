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
    len = nums1.length + nums2.length
  let midNum = 0
  while (k) {
    if (k == 1) {
      if (len % 2) {
        // 奇数个
        midNum = nums1.length
          ? nums2.length
            ? nums1[0] <= nums2[0]
              ? nums1[0]
              : nums2[0]
            : nums1[0]
          : nums2[0]
      } else {
        // 偶数个
        midNum = nums1.length
          ? nums2.length
            ? (nums1[0] + nums2[0]) / 2
            : (nums1[0] + nums1[1]) / 2
          : (nums2[0] + nums2[1]) / 2
      }
      // 结束
      break
    }

    nums1[k / 2 - 1] != undefined
      ? nums1[k / 2 - 1] != undefined
        ? nums1[k / 2 - 1] <= nums2[k / 2 - 1]
          ? nums1.splice(0, k / 2)
          : nums2.splice(0, k / 2)
        : nums1.splice(0, k / 2)
      : nums2.splice(0, k / 2)

    k -= k / 2
  }

  return midNum
}

let n1 = [0, 0, 0, 0, 0],
  n2 = [-1, 0, 0, 0, 0, 0, 1]

findMedianSortedArrays(n1, n2)