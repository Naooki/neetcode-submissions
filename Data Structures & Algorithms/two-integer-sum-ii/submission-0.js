class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let [l,r] = [0, numbers.length - 1];
        while (numbers[l] + numbers[r] !== target) {
            if (numbers[l] + numbers[r] < target) {
                l++;
            } else if (numbers[l] + numbers[r] > target) {
                r--;
            }
        }
        return [l+1,r+1];
    }
}
