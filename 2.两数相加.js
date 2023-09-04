/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 数字都是按照 逆序 的方式存储,即从左到右 =》 个十百千万...
  // 那直接将链表相同位置节点相加处理好 进位
  // 短的链表 右边默认补零
  // 注意最后一个节点相加的进位值
  let sum = new ListNode(0)
  let carry = 0 // 存储进位值
  const head = sum // *指向链表头，
  while (l1 || l2 || carry) {
    const val1 = l1 != null ? l1.val : 0
    const val2 = l2 != null ? l2.val : 0
    sum.next = new ListNode((val1 + val2 + carry) % 10) // 链表的下一个节点也得是链表类型
    sum = sum.next // 指向下一个节点，类似于 i++
    carry = Math.floor((val1 + val2 + carry) / 10) // 向下取整 
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  return head.next // *关键步骤，返回整个链表(由于链表的第一个节点是0，所有返回下一个节点之后的所有数据)
}
// @lc code=end
