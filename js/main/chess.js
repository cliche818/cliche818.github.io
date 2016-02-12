function Chess() {
    this.board = new Array(8);

    for(var i = 0; i < 8; i++){
        this.board[i] = new Array(8);
    }
}

Chess.prototype = {
    placePiece : function(piece, x, y) {
        this.board[x][y] = piece;
        coordinate = piece.coordinate;
        coordinate.x = x;
        coordinate.y = y;
    },

    movePiece : function(piece, destinationX, destinationY) {
        if(this.board[destinationX][destinationY] == null) {
            if(piece.validMove(destinationX, destinationY)) {
                coordinate = piece.coordinate;
                this.board[coordinate.x][coordinate.y] = undefined;
                this.board[destinationX][destinationY] = piece;
                coordinate.x = destinationX;
                coordinate.y = destinationY;
            }
        } else {
            if(!piece.isSameTeam(this.board[destinationX][destinationY].team)) {
                killedPiece = this.board[destinationX][destinationY];
                coordinate = piece.coordinate;
                this.board[coordinate.x][coordinate.y] = undefined;
                this.board[destinationX][destinationY] = piece;
                coordinate.x = destinationX;
                coordinate.y = destinationY;
            }
        }
    }
};
