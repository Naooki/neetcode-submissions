class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sumIdx = nums.length
        let sumEl = 0
        for (let i = 0; i < nums.length; i++) {
            sumIdx += i
            sumEl += nums[i]
        }
        return sumIdx - sumEl
    }
}
