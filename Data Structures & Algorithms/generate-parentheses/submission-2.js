class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        this.backtrack(n, 0, 0, '', res);
        return res;
    }

    backtrack(n, left, right, curr, res) {
        if (left === n && right === left) {
            res.push(curr);
            return;
        }

        if (left < n) {
            this.backtrack(n, left + 1, right, curr + '(', res);
        }

        if (right < left) {
            this.backtrack(n, left, right + 1, curr + ')', res);
        }
    }
}
