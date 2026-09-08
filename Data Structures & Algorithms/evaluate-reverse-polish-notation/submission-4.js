class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operatorsMap = {
            '+': (a,b) => a + b,
            '-': (a,b) => a - b,
            '*': (a,b) => a * b,
            '/': (a,b) => a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b),
        };
        const stack = [];
        for (let token of tokens) {
            if (operatorsMap[token]) {
                const op2 = stack.pop();
                const op1 = stack.pop();
                const operationResult = operatorsMap[token](op1, op2);
                stack.push(operationResult);
            } else {
                stack.push(Number(token));
            }
        }
        return stack[0]
    }
}
