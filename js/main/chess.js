function Chess() {
    this.board = new Array(8);

    for(var i = 0; i < 8; i++){
        this.board[i] = new Array(8);
    }
}

Chess.prototype = {
    placePiece : function(piece, row, column) {
        this.board[row][column] = piece;
        piece.row = row;
        piece.column = column;
    },

    movePiece : function(piece, row, column) {

        if((piece.row - row === -1) || (piece.column - column) === -1) {
            this.board[piece.row][piece.column] = undefined;
            this.board[row][column] = piece;
            piece.row = row;
            piece.column = column;
        }

    }
};
