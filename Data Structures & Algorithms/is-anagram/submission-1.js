class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const ms = new Map();
        const mt = new Map();
        for (let i = 0; i < s.length; i++) {
            let msVal = ms.get(s[i]);
            if (msVal) {
                ms.set(s[i], ++msVal);
            } else {
                ms.set(s[i], 1);
            }

            let mtVal = mt.get(t[i]);
            if (mtVal) {
                mt.set(t[i], ++mtVal);
            } else {
                mt.set(t[i], 1);
            }
        }

        const msKeys = ms.keys();
        for (let key of msKeys) {
            const msVal = ms.get(key);
            const mtVal = mt.get(key);
            if (msVal !== mtVal) return false;
        }
        return true;
    }
}
