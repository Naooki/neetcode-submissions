class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let res = 0;

        for (let h of heights) {
            let prev = stack[stack.length - 1];
            if (!prev || prev.h < h) {
                stack.push({ h, w: 1 })
            } else {
                let w = 0;
                
                while (stack.length && prev.h >= h) {
                    const el = stack.pop();
                    w += el.w;
                    res = Math.max(res, el.h * w);
                    prev = stack[stack.length - 1];
                }
                stack.push({ h, w: w + 1 });
            }
        }

        let currW = 0;
        while (stack.length) {
            const el = stack.pop();
            currW += el.w;
            res = Math.max(res, el.h * currW);
        }
        return res
    }
}
