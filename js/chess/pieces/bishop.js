function Bishop (team) {
  ChessPiece.call(this, arguments);
  this.name = 'bishop';
}

Bishop.prototype = new ChessPiece();

Bishop.prototype.validMove = function(destinationX, destinationY) {
  var path = this.path(destinationX, destinationY);

  return path.length > 0;
};

Bishop.prototype.path = function(destinationX, destinationY) {
  return this.coordinate.diagonalPath(destinationX, destinationY);
};

Bishop.prototype.killPath = function(destinationX, destinationY) {
  return this.path(destinationX, destinationY);
};