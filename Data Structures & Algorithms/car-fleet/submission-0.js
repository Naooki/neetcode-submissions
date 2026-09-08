class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const arr = position.map((pos, i) => ({pos, spd: speed[i]})).sort((a, b) => a.pos - b.pos);
        let fleets = 0;
        let currMinTime = 0;
        for (let i = arr.length - 1; i >= 0; --i) {
            const carTime = (target - arr[i].pos) / arr[i].spd;
            if (carTime > currMinTime) {
                fleets++;
            }
            currMinTime = Math.max(currMinTime, carTime)
        }
        return fleets;
    }
}
