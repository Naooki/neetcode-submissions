class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.reduce((acc, str) => acc + `${str.length}#${str}`, '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#' && j < str.length) {
                j++;
            }
            let wordLen = parseInt(str.substring(i, j++));
            res.push(str.substring(j, j + wordLen));
            i = j + wordLen;
        }
        return res;
    }
}
