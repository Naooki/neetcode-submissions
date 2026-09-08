class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const s = new Set();
        for (let num of nums) {
            if (s.has(num)) return true;
            s.add(num);    
        }
        return false;
    }
}
