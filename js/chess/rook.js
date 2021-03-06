function Rook(team) {
  ChessPiece.call(this, arguments);
  this.name = 'rook';
}

Rook.prototype = new ChessPiece();

Rook.prototype.validMove = function (destinationX, destinationY) {
  var path = this.path(destinationX, destinationY);

  return path.length > 0;
};

Rook.prototype.validKillMove = function(destinationX, destinationY) {
  return this.validMove(destinationX, destinationY);
};

Rook.prototype.path = function(destinationX, destinationY) {
  var path = [];

  if ((destinationX - this.coordinate.x) !== 0 && destinationY === this.coordinate.y) {
    path = this.coordinate.verticalPath(destinationX, destinationY);
  } else if ((destinationY - this.coordinate.y) !== 0 && destinationX === this.coordinate.x) {
    path = this.coordinate.horizontalPath(destinationX, destinationY);
  }

  return path;
};

Rook.prototype.killPath = function(destinationX, destinationY) {
  return this.path(destinationX, destinationY);
}