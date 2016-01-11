function ChessPiece() {
    this.row = null;
    this.column = null;
}

ChessPiece.prototype = {
    validMove: function() {
        return true;
    }
};