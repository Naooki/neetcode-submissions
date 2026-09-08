class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const hwPairsStack = [];
        let result = 0;

        for (let h of heights) {
            let prev = hwPairsStack[hwPairsStack.length - 1];
            let w = 0;
            while (prev && prev.h >= h) {
                const el = hwPairsStack.pop();
                w = el.w;
                prev = hwPairsStack[hwPairsStack.length - 1];
            }
            hwPairsStack.push({ h, w });
            hwPairsStack.forEach(el => {
               const area = ++el.w * el.h;
               result = Math.max(area, result);
            });
        }
        return result;
    }
}
