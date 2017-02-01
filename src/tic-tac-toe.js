class TicTacToe {
    constructor() {
        this.Game = [
            [],
            [],
            []
        ];
        this.x = null;
        this.o = null;
    }

    getCurrentPlayerSymbol() {
        return !this.Game ? 'x' : this.x > this.o ? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {
        let symbol = this.getCurrentPlayerSymbol();
        if (!this.Game[rowIndex][columnIndex]) {
            this.Game[rowIndex][columnIndex] = symbol;
            this[symbol]++;
        }
    }

    isFinished() {
        return this.getWinner() || this.noMoreTurns() ? true : false;
    }

    getWinner() {
        if (this.x > this.o) {
            for (let i = 0; i <= 2; i++) {
                if ((this.Game[i][0] && this.Game[i][0] === this.Game[i][1] && this.Game[i][0] === this.Game[i][2]) ||
                    (this.Game[0][i] && this.Game[0][i] === this.Game[1][i] && this.Game[0][i] === this.Game[2][i]) ||
                    (this.Game[0][0] && this.Game[0][0] === this.Game[1][1] && this.Game[0][0] === this.Game[2][2]) ||
                    (this.Game[0][2] && this.Game[0][2] === this.Game[1][1] && this.Game[0][2] === this.Game[2][0])) {
                    return 'x';
                }
            }
            return null;
        } else {
            if (this.x === this.o) {
                for (let i = 0; i <= 2; i++) {
                    if ((this.Game[i][0] && this.Game[i][0] === this.Game[i][1] && this.Game[i][0] === this.Game[i][2]) ||
                        (this.Game[0][i] && this.Game[0][i] === this.Game[1][i] && this.Game[0][i] === this.Game[2][i]) ||
                        (this.Game[0][0] && this.Game[0][0] === this.Game[1][1] && this.Game[0][0] === this.Game[2][2]) ||
                        (this.Game[0][2] && this.Game[0][2] === this.Game[1][1] && this.Game[0][2] === this.Game[2][0])) {
                        return 'o';
                    }
                }
                return null;
            }
        }
    }

    noMoreTurns() {
        return this.x + this.o === 9;
    }

    isDraw() {
        if (!this.getWinner() && this.noMoreTurns()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex <= 2 && colIndex <= 2) {
            return !this.Game[rowIndex][colIndex] ? null : this.Game[rowIndex][colIndex];
        }
        return null;
    }
}


module.exports = TicTacToe;
