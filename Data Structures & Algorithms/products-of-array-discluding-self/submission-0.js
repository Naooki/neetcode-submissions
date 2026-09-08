class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixArr = [];
        const postfixArr = [];
        
        for (let i = 0; i < nums.length; i++) {
            const nextPrefix = prefixArr.length ?
                prefixArr[prefixArr.length - 1] * nums[i - 1] :
                1;
            prefixArr.push(nextPrefix);

            const nextPostfix = postfixArr.length ?
                postfixArr[postfixArr.length - 1] * nums[nums.length - i] :
                1;
            postfixArr.push(nextPostfix);
        }

        const output = [];
        for (let i = 0; i < nums.length; i++) {
            output.push(prefixArr[i] * postfixArr[nums.length - i - 1]);
        }
        return output;
    }
}
