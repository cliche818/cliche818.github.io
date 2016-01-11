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

    movePiece : function(piece, destination_x, destination_y) {

        if(piece.validMove(destination_x, destination_y)) {
            this.board[piece.x][piece.y] = undefined;
            this.board[destination_x][destination_y] = piece;
            piece.x = destination_x;
            piece.y = destination_y;
        }

    }
};
