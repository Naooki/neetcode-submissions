function getMax(nums, start, end) {
    let [prev2, prev1] = [0, 0];

    for (let i = start; i < end; i++) {
        const max = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = max;
    }
    return prev1;
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return Math.max(
            getMax(nums, 1, nums.length),
            getMax(nums, 0, nums.length - 1),
            nums[0],
        );
    }
}
