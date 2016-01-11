function ChessPiece() {
    this.x = null;
    this.y = null;
}

ChessPiece.prototype = {
    validMove: function(destinationX, destinationY) {
        return !this.samePosition(destinationX, destinationY) && destinationX >= 0 && destinationX < 8 && destinationY >= 0 && destinationY < 8;
    },

    samePosition: function(x, y) {
        return (x === this.x && y === this.y);
    }
};