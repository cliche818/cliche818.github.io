function ChessPiece() {
    this.x = null;
    this.y = null;
}

ChessPiece.prototype = {
    validMove: function() {
        return true;
    }
};