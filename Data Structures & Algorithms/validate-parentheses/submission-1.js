class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '{': '}',
            '(': ')',
            '[': ']',
        };
        const stack = [];
        for (let ch of s) {
            if (pairs[ch]) {
                stack.push(ch);
            } else {
                const latest = stack.pop();
                if (!latest) return false;
                if (ch !== pairs[latest]) return false;
            }
        }
        return !stack.length;
    }
}
