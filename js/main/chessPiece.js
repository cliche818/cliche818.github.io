function ChessPiece() {
    this.coordinate = new Coordinate();
}

ChessPiece.prototype = {
    validMove: function(destinationX, destinationY) {
        return !this.samePosition(destinationX, destinationY) && destinationX >= 0 && destinationX < 8 && destinationY >= 0 && destinationY < 8;
    },

    samePosition: function(x, y) {
        return (x === this.coordinate.x && y === this.coordinate.y);
    }
};