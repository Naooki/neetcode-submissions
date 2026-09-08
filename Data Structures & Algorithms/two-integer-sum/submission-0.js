class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map()

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const complement = target - num;
            const hasComplement = m.has(complement);
            if (hasComplement) {
                const complementIdx = m.get(complement);
                return [complementIdx, i];
            }
            m.set(num, i);
        }
    }
}
