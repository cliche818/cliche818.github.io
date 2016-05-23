function Bishop (team) {
  ChessPiece.call(this, arguments);
  this.name = 'bishop';
}

Bishop.prototype = new ChessPiece();

Bishop.prototype.validMove = function(destinationX, destinationY) {
  var path = this.coordinate.diagonalPath(destinationX, destinationY);

  return path.length > 0;
};