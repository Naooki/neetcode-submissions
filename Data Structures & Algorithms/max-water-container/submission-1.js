class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
            let maxArea = 0;
    let [l, r] = [0, heights.length - 1];

    while (l < r) {
        const hght = Math.min(heights[l], heights[r]);
        const len = r - l;
        maxArea = Math.max(maxArea, hght * len);
        if (heights[l] < heights[r]) {
            l++;
        } else if (heights[l] > heights[r]) {
            r--;
        } else {
            l++;
            r--;
        }
    }
    return maxArea;
    }
}
