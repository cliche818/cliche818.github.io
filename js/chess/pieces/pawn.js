function Pawn(team, direction){
  ChessPiece.call(this, arguments);

  this.team = team;
  this.direction = direction;
}

Pawn.prototype = new ChessPiece();

Pawn.prototype.validMove = function (destinationX, destinationY, firstMove) {
  
  if (this.coordinate.x === destinationX && this.coordinate.y + 1 === destinationY && this.direction === 'up') {
    return true;
  } else if (this.coordinate.x === destinationX && this.coordinate.y - 1 === destinationY && this.direction === 'down') {
    return true;
  } else if (this.coordinate.x === destinationX && this.coordinate.y + 2 === destinationY && this.direction === 'up' && firstMove) {
    return true;
  } else if (this.coordinate.x === destinationX && this.coordinate.y - 2 === destinationY && this.direction === 'down' && firstMove) {
    return true;  
  } else {
    return false;
  }
};