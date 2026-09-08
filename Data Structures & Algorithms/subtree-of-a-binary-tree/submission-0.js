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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        return dfs(root, subRoot);
    }
}

function dfs(node, subRoot) {
    if (!node) return false;
    if (isSameTree(node, subRoot)) return true;
    const left = dfs(node.left, subRoot);
    const right = dfs(node.right, subRoot);
    return left || right;
}

function isSameTree(n1, n2) {
    if (!n1 || !n2) return !n1 && !n2;
    if (n1.val !== n2.val) return false;
    const left = isSameTree(n1.left, n2.left);
    const right = isSameTree(n1.right, n2.right);
    return left && right;
}