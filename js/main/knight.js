function Knight(team) {
  ChessPiece.call(this.arguments);
  this.name = 'knight';
}

Knight.prototype = new ChessPiece();

Knight.prototype.validMove = function (destinationX, destinationY) {
  possibleDestinations = this.generateAllPossibleDestinations(destinationX, destinationY);

  var validMove = false;
  var coordinate = new Coordinate(destinationX, destinationY);
  for (var possibleDestination of possibleDestinations) {
    if (possibleDestination.equals(coordinate)) {
      validMove = true;
    }
  }

  var baseRuleValid = ChessPiece.prototype.validMove.call(this, destinationX, destinationY);
  return baseRuleValid && validMove;
};

Knight.prototype.generateAllPossibleDestinations = function () {

  var x = this.coordinate.x;
  var y = this.coordinate.y;

  return [
    new Coordinate(x + 2, y + 1),
    new Coordinate(x + 2, y - 1),
    new Coordinate(x - 2, y + 1),
    new Coordinate(x - 2, y - 1),
    new Coordinate(x + 1, y + 2),
    new Coordinate(x - 1, y + 2),
    new Coordinate(x + 1, y - 2),
    new Coordinate(x - 1, y - 2)
  ]


};