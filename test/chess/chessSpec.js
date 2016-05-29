describe('Chess Game', function () {

  var chess;

  beforeEach(function () {
    chess = new Chess();
  });

  describe('placePiece', function () {
    it('should place a king on the board at a location on the board', function () {
      var king = new ChessPiece(['white']);
      chess.placePiece(king, 0, 4);
      expect(chess.board[0][4]).toBe(king);

      coord = king.coordinate;
      expect(coord.x).toBe(0);
      expect(coord.y).toBe(4);
    });
  });

  describe('isPiecePlayable', function () {
    it('should return true if the given coordinate\'s piece is on the same team', function () {
      chessPiece = new ChessPiece(['black']);
      chess.placePiece(chessPiece, 0, 4);
      chess.turn = 'black';
      expect(chess.isPiecePlayable(0, 4)).toBe(true);
    });

    it('should return false if the given coordinate\'s piece is not on the same team', function () {
      chessPiece = new ChessPiece(['black']);
      chess.placePiece(chessPiece, 0, 4);
      expect(chess.isPiecePlayable(0, 4)).toBe(false);
    });

    it('should return false if there is no chess piece in those coordinates', function () {
      expect(chess.isPiecePlayable(0, 4)).toBe(false);
    });
  });

  describe('winner', function () {

    it('should return null if there is no winner', function () {
      expect(chess.winner()).toBe(null);
    });

    it('should return white if white captures the black king piece', function () {
      whitePiece = new ChessPiece(['white']);
      blackKing = new King(['black']);
      chess.placePiece(whitePiece, 4, 4);
      chess.placePiece(blackKing, 0, 4);

      chess.movePiece(whitePiece, 0, 4);
      expect(chess.winner()).toBe('white');
    });
  });

  describe('movePiece', function () {

    describe('general piece', function () {
      beforeEach(function () {
        chessPiece1 = new ChessPiece(['white']);
        chess.placePiece(chessPiece1, 0, 4);
        sinon.stub(chessPiece1, "path", function() { return ([[1, 4]]) });
      });

      describe('moving into a blank space or preoccupied by same team', function () {
        it('should change whose turn it is after moving a piece', function () {
          var returnedPiece = chess.movePiece(chessPiece1, 1, 4);
          expect(chess.turn).toBe('black');
          expect(returnedPiece instanceof ChessPiece).toBe(true);
        });

        it('should not be able to move a chess piece to a preoccupied spot in the same team and return null', function () {
          var chessPiece2 = new ChessPiece(['white']);
          chess.placePiece(chessPiece2, 1, 4);

          var returnedPiece = chess.movePiece(chessPiece1, 1, 4);

          expect(chess.board[0][4] instanceof ChessPiece).toBe(true);
          expect(chess.board[1][4] instanceof ChessPiece).toBe(true);

          expect(returnedPiece).toBe(null);
        });

        it('should not move a piece where another piece is in its path to get to its destination', function () {
          chessPiece1.path.restore();
          sinon.stub(chessPiece1, "path", function() { return ([[1, 4], [2, 4], [3, 4], [4, 4]]) });

          chessPiece2 = new ChessPiece(['black']);
          chess.placePiece(chessPiece2, 2, 4);

          chess.movePiece(chessPiece1, 4, 4);

          expect(chess.board[0][4] instanceof ChessPiece).toBe(true);
          expect(chess.board[4][4] instanceof ChessPiece).toBe(false);
        });
      });

      describe('moving into a space with enemy piece', function () {
        it('should allow a chess piece to go to a preoccupied spot from different team and remove that piece', function () {
          chessPiece2 = new ChessPiece(['black']);
          chess.placePiece(chessPiece2, 1, 4);
          chess.movePiece(chessPiece1, 1, 4);
          expect(chess.board[0][4] instanceof ChessPiece).toBe(false);
          expect(chess.board[1][4] instanceof ChessPiece).toBe(true);

        });

        it('should return the killed chess piece', function () {
          chessPiece2 = new ChessPiece(['black']);
          chess.placePiece(chessPiece2, 1, 4);
          killedPiece = chess.movePiece(chessPiece1, 1, 4);
          expect(killedPiece instanceof ChessPiece).toBe(true);
          expect(killedPiece.team).toBe('black');
        });

        it('should change whose turn it is after taking out a piece', function () {
          chessPiece2 = new ChessPiece(['black']);
          chess.placePiece(chessPiece2, 1, 4);
          chess.movePiece(chessPiece1, 1, 4);
          expect(chess.turn).toBe('black');
        });

        it('should not kill the destination piece if path is obstructed and return null', function (){
          chessPiece1.path.restore();
          sinon.stub(chessPiece1, "killPath", function() { return ([[1, 4], [2, 4], [3, 4], [4, 4]]) });

          toBeKilledChessPiece = new ChessPiece(['black']);
          chess.placePiece(toBeKilledChessPiece, 4, 4);
          chessPiece2 = new ChessPiece(['black']);
          chess.placePiece(chessPiece2, 2, 4);

          returnedPiece = chess.movePiece(chessPiece1, 4, 4);
          expect(chess.board[0][4] instanceof ChessPiece).toBe(true);
          expect(chess.board[4][4] instanceof ChessPiece).toBe(true);

          expect(returnedPiece).toBe(null);
        });
      });
    });

    describe('king', function () {
      var king;
      beforeEach(function () {
        king = new King();
        chess.placePiece(king, 0, 4);
      });

      it('should move a king one spot forward', function () {
        chess.movePiece(king, 1, 4);
        expect(chess.board[0][4]).toBe(undefined);
        expect(chess.board[1][4] instanceof King).toBe(true);

        coord = king.coordinate;
        expect(coord.x).toBe(1);
        expect(coord.y).toBe(4);
      });

      it('should not move a king two spot forward', function () {
        chess.movePiece(king, 2, 4);
        expect(chess.board[2][4]).toBe(undefined);
        expect(chess.board[0][4] instanceof King).toBe(true);
      });
    })
  });
});