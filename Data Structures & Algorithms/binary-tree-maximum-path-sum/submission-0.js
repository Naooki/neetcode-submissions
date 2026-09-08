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
            if (node.left && node.right) {
                const left = traverse(node.left);
                const right = traverse(node.right);
                const nodeMax = Math.max(
                    left + node.val,
                    right + node.val,
                    node.val,
                );
                max = Math.max(max, nodeMax, left, right, left + right + node.val);
                return nodeMax;
            }
            if (node.left) {
                const left = traverse(node.left);
                const nodeMax = Math.max(
                    left + node.val,
                    node.val,
                );
                max = Math.max(max, nodeMax, left);
                return nodeMax;
            }
            if (node.right) {
                const right = traverse(node.right);
                const nodeMax =  Math.max(
                    right + node.val,
                    node.val,
                );
                max = Math.max(max, nodeMax, right);
                return nodeMax;
            }
            return node.val;
        }

        traverse(root);

        return max;
    }
}
