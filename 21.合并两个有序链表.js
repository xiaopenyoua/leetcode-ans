/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list = new ListNode(0)
  const head = list
  while (list1 && list2) {
    const val1 = list1.val
    const val2 = list2.val

    if (val1 <= val2) {
      list.next = list1
      list1 = list1.next
    } else {
      list.next = list2
      list2 = list2.next
    }

    list = list.next
  }

  if (list1) {
    list.next = list1
  }
  if (list2) {
    list.next = list2
  }

  return head.next
}
// @lc code=end
