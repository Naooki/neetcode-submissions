class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let [max1, max2] = [0, 0];

        for (let i = 0; i < nums.length; i++) {
            const currMax = Math.max(max2, max1 + nums[i]);
            max1 = max2;
            max2 = currMax;
        }
        return max2;
    }
}
