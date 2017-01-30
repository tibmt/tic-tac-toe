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
        if (!this.Game){
            return 'x';
        }
        if (this.x > this.o){
            return 'o';
        }else{
            return 'x';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.x && !this.o){
            this.x++;
            this.Game[rowIndex][columnIndex] = 'x';
        }
        if (this.x === this.o){
            this.x++;
            if (!this.Game[rowIndex][columnIndex]) {
                this.Game[rowIndex][columnIndex] = 'x';
            }else{
                this.x--;
            }
        }else{
            this.o++;
            if (!this.Game[rowIndex][columnIndex]) {
                this.Game[rowIndex][columnIndex] = 'o';
            }else{
                this.o--;
            }
        }
    }

    isFinished() {
        let m = 0;
        if (this.x + this.o === 9){
            return true;
        }else{
            for (let i = 0; i <= 2; i++){
                if (this.Game[i][0] && this.Game[i][0] === this.Game[i][1] && this.Game[i][0] === this.Game[i][2]) {
                    m++;
                    return true;
                }
                if (this.Game[0][i] && this.Game[0][i] === this.Game[1][i] && this.Game[0][i] === this.Game[2][i]){
                    m++;
                    return true;
                }
            }
            if (this.Game[0][0] && this.Game[0][0] === this.Game[1][1] && this.Game[0][0] === this.Game[2][2]){
                m++;
                return true;
            }
            if (this.Game[0][2] && this.Game[0][2] === this.Game[1][1] && this.Game[0][2] === this.Game[2][0]){
                m++;
                return true;
            }
            if (m === 0){
                return false;
            }

        }
    }

    getWinner() {
        let m = 0;
        if (this.x > this.o) {
            for (let i = 0; i <= 2; i++) {
                if (this.Game[i][0] && this.Game[i][0] === this.Game[i][1] && this.Game[i][0] === this.Game[i][2]) {
                    m++;
                    return 'x';
                }
                if (this.Game[0][i] && this.Game[0][i] === this.Game[1][i] && this.Game[0][i] === this.Game[2][i]) {
                    m++;
                    return 'x';
                }
                if (this.Game[0][0] && this.Game[0][0] === this.Game[1][1] && this.Game[0][0] === this.Game[2][2]) {
                    m++;
                    return 'x';
                }
                if (this.Game[0][2] && this.Game[0][2] === this.Game[1][1] && this.Game[0][2] === this.Game[2][0]) {
                    m++;
                    return 'x';
                }
            }
            if (m === 0){
                return null
            }
        } else {
            m = 0;
            if (this.x === this.o) {
                for (let i = 0; i <= 2; i++) {
                    if (this.Game[i][0] && this.Game[i][0] === this.Game[i][1] && this.Game[i][0] === this.Game[i][2]) {
                        m++;
                        return 'o';
                    }
                    if (this.Game[0][i] && this.Game[0][i] === this.Game[1][i] && this.Game[0][i] === this.Game[2][i]) {
                        m++;
                        return 'o';
                    }
                    if (this.Game[0][0] && this.Game[0][0] === this.Game[1][1] && this.Game[0][0] === this.Game[2][2]) {
                        m++;
                        return 'o';
                    }
                    if (this.Game[0][2] && this.Game[0][2] === this.Game[1][1] && this.Game[0][2] === this.Game[2][0]) {
                        m++;
                        return 'o';
                    }
                }
                if (m === 0) {
                    return null;
                }
            }
        }
    }

    noMoreTurns() {
        if(this.x + this.o === 9){
            return true;
        }else{
            return false;
        }
    }

    isDraw() {
        let k = 0;
        if(this.x + this.o === 9){
            for (let i = 0; i < 2; i++){
                if (this.Game[i][0] === this.Game[i][1] && this.Game[i][0] === this.Game[i][2]) {
                    k++;
                }
                if (this.Game[0][i] === this.Game[1][i] && this.Game[0][i] === this.Game[2][i]){
                    k++;
                }
            }
            if (this.Game[0][0] === this.Game[1][1] && this.Game[0][0] === this.Game[2][2]){
                k++;
            }
            if (this.Game[0][2] === this.Game[1][1] && this.Game[0][2] === this.Game[2][0]){
                k++;
            }
            if (k === 0){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if(rowIndex <= 2 && colIndex <= 2 ){
            if (!this.Game[rowIndex][colIndex]){
                return null;
            }else {
                return this.Game[rowIndex][colIndex];
            }
        }else{
            return null;
        }
    }
}

module.exports = TicTacToe;
