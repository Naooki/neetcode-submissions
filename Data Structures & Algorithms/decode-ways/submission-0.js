class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let [dp2, dp1] = [1, 1];
        for (let i = 0; i < s.length; i++) {
            const prev = i > 0 ? parseInt(s[i - 1]) : null;
            const curr = parseInt(s[i]);

            let temp;
            if (curr === 0) {
                if (!prev || prev > 2) return 0;
                temp = Math.max(dp2, 1);
            } else {
                if (prev !== null && prev > 0 && prev * 10 + curr <= 26) {
                    temp = dp1 + dp2;
                } else {
                    temp = dp1;
                }
            }
            dp2 = dp1;
            dp1 = temp;
        }
        return dp1;
    }
}
