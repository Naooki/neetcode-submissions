class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const arr = new Array(9);
        for (let i = 0; i < board.length; ++i) {
            arr.fill(false);

            for (let j = 0; j < board.length; ++j) {
                const num = board[i][j];
                if (num === '.') continue;
                if (arr[num - 1]) return false;
                arr[num - 1] = true;
            }   
        }

        for (let i = 0; i < board.length; ++i) {
            arr.fill(false);

            for (let j = 0; j < board.length; ++j) {
                const num = board[j][i];
                if (num === '.') continue;
                if (arr[num - 1]) return false;
                arr[num - 1] = true;
            }   
        }

        for (let k = 0; k < 3; k++) {
            for (let l = 0; l < 3; l++) {
                arr.fill(false);
                for (let i = k * 3 + 0; i < k * 3 + 3; ++i) {
                    for (let j = l * 3 + 0; j < l * 3 + 3; ++j) {
                        const num = board[j][i];
                        if (num === '.') continue;
                        if (arr[num - 1]) return false;
                        arr[num - 1] = true;
                    }   
                }
            }
        }

        return true;
    }
}
