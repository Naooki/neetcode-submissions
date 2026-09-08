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
     * @return {number}
     */
    maxPathSum(root) {
        let max = root.val;

        function traverse(node) {
            if (!node) return 0;
            const growthLeft = Math.max(traverse(node.left), 0);
            const growthRight = Math.max(traverse(node.right), 0);

            max = Math.max(max, node.val + growthLeft + growthRight);

            return Math.max(node.val, node.val + growthLeft, node.val + growthRight);
        }

        traverse(root);

        return max;
    }
}
