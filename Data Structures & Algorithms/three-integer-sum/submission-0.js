class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
            const res = [];
    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i-1]) continue;
        // [-4,-1,-1,0,1,2]

        let [l,r] = [i + 1, nums.length - 1];
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            } else if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }
    }

    return res;
    }
}
