class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();

        for (let num of nums) {
            set.add(num);
        }

        let maxLen = 0;
        for (let num of nums) {
            let currLen = 0;
            let currNum = num;
            while (set.has(currNum - 1)) {
                set.delete(currNum - 1);
                currLen++;
                currNum--;
            }
            currNum = num;
            while (set.has(currNum)) {
                set.delete(currNum);
                currLen++;
                currNum++;
            }

            maxLen = Math.max(maxLen, currLen);
        }
        return maxLen;
    }
}
