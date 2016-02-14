function Chess() {
    this.board = new Array(8);
    this.turn = 'white';

    for (var i = 0; i < 8; i++) {
        this.board[i] = new Array(8);
    }
}

Chess.prototype = {
    placePiece: function (piece, x, y) {
        this.board[x][y] = piece;
        coordinate = piece.coordinate;
        coordinate.x = x;
        coordinate.y = y;
    },

    isValidPiece: function (x, y) {
        chessPiece = this.board[x][y];

        if (typeof chessPiece !== 'undefined' && chessPiece.team === this.turn) {
            return true;
        } else {
            return false;
        }
    },

    movePiece: function (piece, destinationX, destinationY) {
        if (this.board[destinationX][destinationY] == null) {
            if (piece.validMove(destinationX, destinationY)) {
                coordinate = piece.coordinate;
                this.board[coordinate.x][coordinate.y] = undefined;
                this.board[destinationX][destinationY] = piece;
                coordinate.x = destinationX;
                coordinate.y = destinationY;
                this.changeTurn();
            }
        } else {
            if (!piece.isSameTeam(this.board[destinationX][destinationY].team)) {
                killedPiece = this.board[destinationX][destinationY];
                coordinate = piece.coordinate;
                this.board[coordinate.x][coordinate.y] = undefined;
                this.board[destinationX][destinationY] = piece;
                coordinate.x = destinationX;
                coordinate.y = destinationY;
                this.changeTurn();

                return killedPiece;
            }
        }
    },

    changeTurn: function () {
        if (this.turn === 'white') {
            this.turn = 'black';
        } else {
            this.turn = 'white';
        }
    }
};
