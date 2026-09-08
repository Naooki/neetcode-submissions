class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = new Array(nums.length);
        
        let nextPrefix = 1;
        for (let i = 0; i < nums.length; i++) {
            output[i] = nextPrefix;
            nextPrefix = nextPrefix * nums[i];
        }

        let nextPostfix = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            nextPostfix *= nums[i + 1];
            output[i] *= nextPostfix;
        }

        return output;
    }
}
