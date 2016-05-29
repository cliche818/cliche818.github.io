function Chess() {
  this.board = new Array(8);
  this.turn = 'white';
  this.winning_team = null;

  for (var i = 0; i < 8; i++) {
    this.board[i] = new Array(8);
  }
}

Chess.prototype = {
  placePiece: function (piece, x, y) {
    this.board[x][y] = piece;
    coordinate = piece.coordinate;
    coordinate.x = x;
    coordinate.y = y;
  },

  isPiecePlayable: function (x, y) {
    chessPiece = this.board[x][y];

    if (typeof chessPiece !== 'undefined' && chessPiece.team === this.turn) {
      return true;
    } else {
      return false;
    }
  },

  winner: function () {
    return this.winning_team;
  },

  setMovedPieceLocation: function (piece, destinationX, destinationY) {
    var coordinate = piece.coordinate;
    this.board[coordinate.x][coordinate.y] = undefined;
    this.board[destinationX][destinationY] = piece;
    coordinate.x = destinationX;
    coordinate.y = destinationY;
  },

  canMoveToEmptySpot: function (piece, destinationX, destinationY) {
    var chessPieceAtDestination = this.board[destinationX][destinationY];

    return chessPieceAtDestination == null && this.path_not_obstructed(piece, destinationX, destinationY);
  },

  canKillEnemyPiece: function (piece, destinationX, destinationY) {
    var chessPieceAtDestination = this.board[destinationX][destinationY];
    return chessPieceAtDestination != null && !piece.isSameTeam(chessPieceAtDestination.team) && this.path_not_obstructed(piece, destinationX, destinationY);
  },

  movePiece: function (piece, destinationX, destinationY) {
    var chessPieceAtDestination = this.board[destinationX][destinationY];

    if (this.canMoveToEmptySpot(piece, destinationX, destinationY)) {
      if (piece.validMove(destinationX, destinationY)) {
        this.setMovedPieceLocation(piece, destinationX, destinationY);

        this.changeTurn();
        return piece;
      }
    } else {
      if (this.canKillEnemyPiece(piece, destinationX, destinationY)) {
        var killedPiece = chessPieceAtDestination;
        this.setMovedPieceLocation(piece, destinationX, destinationY);

        if (killedPiece.name === 'king') {
          this.winning_team = piece.team;
        }

        this.changeTurn();
        return killedPiece;
      }
    }

    return null;
  },

  path_not_obstructed: function (piece, destinationX, destinationY) {
    for (var coordinate of piece.path(destinationX, destinationY)) {
      var x = coordinate[0];
      var y = coordinate[1];

      if (this.board[x][y] != null && !(destinationX === x && destinationY === y)) {
        return false;
      }
    }
    return true;
  },

  changeTurn: function () {
    if (this.turn === 'white') {
      this.turn = 'black';
    } else {
      this.turn = 'white';
    }
  }
};
