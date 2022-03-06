/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var left = null;
  var right = null;
  var slow = head;
  var fast = head;
  var tmp = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    tmp = slow.next;
    slow.next = left;
    left = slow;
    slow = tmp;
  }
  right = fast ? slow.next : slow;

  while (left && right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
};