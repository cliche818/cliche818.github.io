function King() {
    ChessPiece.call(this);
}

King.prototype = new ChessPiece();

King.prototype = {
    validMove : function(destination_x, destination_y) {
        var xDifference = Math.abs(this.x - destination_x);
        var yDifference = Math.abs(this.y - destination_y);
        return ( xDifference === 1) || (yDifference === 1) ;
    }
};