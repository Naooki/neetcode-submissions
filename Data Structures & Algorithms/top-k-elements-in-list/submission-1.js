class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const m = new Map();
        for (let n of nums) {
            let mVal = m.get(n);
            m.set(n, mVal ? ++mVal : 1);
        }

        const result = [];
        for (let mEntry of m.entries()) {
            for (let i = 0; i < k; ++i) {
                if (!result[i]) {
                    result[i] = mEntry;
                    break;
                } else {
                    if (mEntry[1] > result[i][1]) {
                        result.splice(i, 0, mEntry);
                        break;
                    }
                }
            }
        }
        return result.slice(0, k).map(entry => entry[0]);
    }
}
