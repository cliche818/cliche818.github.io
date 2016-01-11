function King() {
    ChessPiece.call(this);
}

King.prototype = new ChessPiece();

King.prototype = {
    validMove : function(destinationX, destinationY) {
        var xDifference = Math.abs(this.x - destinationX);
        var yDifference = Math.abs(this.y - destinationY);
        console.log( ChessPiece.prototype.validMove.call(this, destinationX, destinationY));
        //var baseRuleValid = ChessPiece.prototype.validMove.call(this,destinationX, destinationY );
        return baseRuleValid ||( xDifference === 1 && destinationY === this.y) || (yDifference === 1 && destinationX === this.x) || (xDifference === 1 && yDifference === 1);
    }
};