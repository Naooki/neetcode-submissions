class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dpArr = new Array(n).fill(1);

        for (let i = 1; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const right = j === 0 ? 0 : dpArr[j - 1];
                dpArr[j] += right;
            }
        }
        return dpArr[n - 1];
    }
}
