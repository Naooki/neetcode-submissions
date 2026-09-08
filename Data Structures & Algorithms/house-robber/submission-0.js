class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const dp = new Array(nums.length);
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            let currMax = nums[i];
            for (let j = 0; j < i - 1; j++) {
                currMax = Math.max(currMax, nums[i] + dp[j]);
            }
            dp[i] = currMax;
            max = Math.max(max, currMax);
        }
        return max;
    }
}
