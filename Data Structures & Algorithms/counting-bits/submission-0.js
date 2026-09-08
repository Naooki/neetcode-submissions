class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const res = new Array(n + 1);
        res [0] = 0;

        let power = 1;
        for (let i = 1; i <= n; i++) {
            if (power * 2 === i) {
                power = i
            }
            res[i] = 1 + res[i - power]
        }

        return res
    }
}
