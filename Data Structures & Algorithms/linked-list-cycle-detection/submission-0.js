/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head.next) return false;

        let [p1, p2] = [head, head.next];
        while (p1 !== p2) {
            if (!p1.next || !p2.next || !p2.next.next) return false;
            p1 = p1.next;
            p2 = p2.next.next;
        }
        return true;
    }
}
