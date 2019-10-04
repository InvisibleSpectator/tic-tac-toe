class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentPlayerSymbol = true;
    }

    getCurrentPlayerSymbol() {
        if (this.currentPlayerSymbol)
            return "x";
        else
            return "o";
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayerSymbol = !this.currentPlayerSymbol;
        }
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
        if (
            this.matrix[0][0] + this.matrix[0][1] + this.matrix[0][2] == "xxx" ||
            this.matrix[1][0] + this.matrix[1][1] + this.matrix[1][2] == "xxx" ||
            this.matrix[2][0] + this.matrix[2][1] + this.matrix[2][2] == "xxx" ||
            this.matrix[0][0] + this.matrix[1][0] + this.matrix[2][0] == "xxx" ||
            this.matrix[0][1] + this.matrix[1][1] + this.matrix[2][1] == "xxx" ||
            this.matrix[0][2] + this.matrix[1][2] + this.matrix[2][2] == "xxx" ||
            this.matrix[2][0] + this.matrix[1][1] + this.matrix[0][2] == "xxx" ||
            this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] == "xxx"
        )
            return "x";
        else if (
            this.matrix[0][0] + this.matrix[0][1] + this.matrix[0][2] == "ooo" ||
            this.matrix[1][0] + this.matrix[1][1] + this.matrix[1][2] == "ooo" ||
            this.matrix[2][0] + this.matrix[2][1] + this.matrix[2][2] == "ooo" ||
            this.matrix[0][0] + this.matrix[1][0] + this.matrix[2][0] == "ooo" ||
            this.matrix[0][1] + this.matrix[1][1] + this.matrix[2][1] == "ooo" ||
            this.matrix[0][2] + this.matrix[1][2] + this.matrix[2][2] == "ooo" ||
            this.matrix[2][0] + this.matrix[1][1] + this.matrix[0][2] == "ooo" ||
            this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] == "ooo"
        )
            return "o";
        else return null;
    }

    noMoreTurns() {
        let i = 0;
        let f = true;
        while (f && i < this.matrix.length) {
            f = !this.matrix[i].some(function (value, index, array) {
                var result = false;
                if (value === null) {
                    result = true;
                }
                return result;
            })
            i++;
        }
        return f;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
