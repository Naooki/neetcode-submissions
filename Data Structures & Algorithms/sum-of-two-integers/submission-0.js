class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        if (b === 0) {
            return a;
        }
        return this.getSum(a^b, (a & b) << 1)
    }
}
