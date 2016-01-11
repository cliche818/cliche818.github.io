function Chess() {
    this.board = new Array(8);

    for(var i = 0; i < 8; i++){
        this.board[i] = new Array(8);
    }
}

Chess.prototype = {
    placePiece : function(piece, x, y) {
        this.board[x][y] = piece;
        piece.x = x;
        piece.y = y;
    },

    movePiece : function(piece, destinationX, destinationY) {

        if(piece.validMove(destinationX, destinationY)) {
            this.board[piece.x][piece.y] = undefined;
            this.board[destinationX][destinationY] = piece;
            piece.x = destinationX;
            piece.y = destinationY;
        }

    }
};
