class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length);
        const stack = [];
        for (let i = temperatures.length - 1; i >= 0; --i) {
            let daysToWarmerDay = 0;
            for (let j = stack.length - 1; j >= 0; j--) {
                if (temperatures[i] < stack[j]) {
                    daysToWarmerDay = stack.length - j; 
                    break;
                }
            }
            stack.push(temperatures[i]);
            res[i] = daysToWarmerDay;
        }
        return res;
    }
}
