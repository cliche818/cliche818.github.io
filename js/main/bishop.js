function Bishop (team) {
  ChessPiece.call(this, arguments);
  this.name = 'Bishop';
}

Bishop.prototype = new ChessPiece();
