function Queen(team) {
  ChessPiece.call(this, arguments);
  this.name = 'queen';
}

Queen.prototype = new ChessPiece();

Queen.prototype.validMove = function (destinationX, destinationY) {
  var path_to_destination = this.path(destinationX, destinationY);

  var baseRuleValid = ChessPiece.prototype.validMove.call(this,destinationX, destinationY );

  return baseRuleValid && path_to_destination.length > 0;
};

Queen.prototype.validKillMove = function(destinationX, destinationY) {
  return this.validMove(destinationX, destinationY);
};

Queen.prototype.path = function (destinationX, destinationY) {

  var x = this.coordinate.x;
  var y = this.coordinate.y;

  if ((destinationX - x) !== 0 && destinationY === y) {
    return this.coordinate.verticalPath(destinationX, destinationY);
  } else if ((destinationY - y) !== 0 && destinationX === x) {
    return this.coordinate.horizontalPath(destinationX, destinationY);
  } else {
    return this.coordinate.diagonalPath(destinationX, destinationY);
  }
};

Queen.prototype.killPath = function (destinationX, destinationY) {
  return this.path(destinationX, destinationY);
};