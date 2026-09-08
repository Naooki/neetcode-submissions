class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const m = new Map();

        for (let str of strs) {
            const chCount = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                const chIdx = str.charCodeAt(i) - 97;
                chCount[chIdx]++;
            }
            const key = chCount.join('#');
            const mVal = m.get(key) || [];
            m.set(key, [...mVal, str]);
        }
        return Array.from(m.values());
    }
}
