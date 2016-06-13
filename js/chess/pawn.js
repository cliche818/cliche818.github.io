function Pawn(team, direction){
  ChessPiece.call(this, arguments);

  this.name = 'pawn';
  this.direction = direction;
}

Pawn.prototype = new ChessPiece();

Pawn.prototype.validMove = function (destinationX, destinationY) {
  if (this.coordinate.x === destinationX && this.coordinate.y + 1 === destinationY && this.direction === 'up') {
    return true;
  } else if (this.coordinate.x === destinationX && this.coordinate.y - 1 === destinationY && this.direction === 'down') {
    return true;
  } else if (this.coordinate.x === destinationX && this.coordinate.y + 2 === destinationY && this.direction === 'up' && this.firstMove()) {
    return true;
  } else if (this.coordinate.x === destinationX && this.coordinate.y - 2 === destinationY && this.direction === 'down' && this.firstMove()) {
    return true;  
  } else {
    return false;
  }
};

Pawn.prototype.validKillMove = function (destinationX, destinationY) {
  var path = this.killPath(destinationX, destinationY);
  return path.length > 0;
};

Pawn.prototype.killPath = function (destinationX, destinationY) {
  if(this.direction === 'down' && destinationY === this.coordinate.y - 1 && (destinationX === this.coordinate.x - 1 || destinationX === this.coordinate.x + 1)) {
    return [[destinationX, destinationY]];
  } else if(this.direction === 'up' && destinationY === this.coordinate.y + 1 && (destinationX === this.coordinate.x - 1 || destinationX === this.coordinate.x + 1)) {
    return [[destinationX, destinationY]];
  }
};

Pawn.prototype.firstMove = function() {
  return this.numberOfMoves === 0;
};