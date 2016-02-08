function King(team) {
    ChessPiece.call(this);
    this.name = 'king';
    this.team = team;
}

King.prototype = new ChessPiece();

King.prototype.validMove = function(destinationX, destinationY) {
        var x = this.coordinate.x;
        var y = this.coordinate.y;

        var xDifference = Math.abs(x - destinationX);
        var yDifference = Math.abs(y - destinationY);
        var baseRuleValid = ChessPiece.prototype.validMove.call(this,destinationX, destinationY );
        return baseRuleValid && ( ( xDifference === 1 && destinationY === y) || (yDifference === 1 && destinationX === x) || (xDifference === 1 && yDifference === 1) );
    };