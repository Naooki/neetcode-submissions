/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const result = [];
        if (!root) return result;
        let curr = [root];

        while (curr.length) {
            const next = [];
            const resRow = new Array(curr.length);
            for (let i = 0; i < curr.length; i++) {
                resRow[i] = curr[i].val;
                if (curr[i].left) next.push(curr[i].left);
                if (curr[i].right) next.push(curr[i].right);
            }
            result.push(resRow);
            curr = next;
        }
        return result;
    }
}
