function ChessPiece(team) {
    this.coordinate = new Coordinate();
    this.team = team;
}

ChessPiece.prototype = {
    validMove: function(destinationX, destinationY) {
        return !this.samePosition(destinationX, destinationY) && destinationX >= 0 && destinationX < 8 && destinationY >= 0 && destinationY < 8;
    },

    samePosition: function(x, y) {
        return (x === this.coordinate.x && y === this.coordinate.y);
    },
    isSameTeam: function(team) {
        return this.team == team;
    }
};