function ChessPiece(arguments) {
    this.coordinate = new Coordinate();

    console.log(arguments);
    if (typeof arguments !== 'undefined'){
        this.team = arguments[0];
    }
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