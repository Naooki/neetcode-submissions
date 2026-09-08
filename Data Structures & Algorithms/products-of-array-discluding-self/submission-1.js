class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length);
        
        let nextPrefix = 1;
        for (let i = 0; i < nums.length; i++) {
            nextPrefix = i > 0 ? nextPrefix * nums[i - 1] : nextPrefix;
            output[i] = nextPrefix;
        }

        let nextPostfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            nextPostfix = i < nums.length - 1 ? nextPostfix * nums[i + 1] : nextPostfix;
            output[i] *= nextPostfix;
        }

        return output;
    }
}
