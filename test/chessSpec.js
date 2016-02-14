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

    describe('isValidPiece', function () {
        it('should return true if the given coordinate\'s piece is on the same team', function() {
            chessPiece = new ChessPiece(['black']);
            chess.placePiece(chessPiece, 0, 4);
            chess.turn = 'black';
            expect(chess.isValidPiece(0, 4)).toBe(true);
        });

        it('should return false if the given coordinate\'s piece is not on the same team', function () {
            chessPiece = new ChessPiece(['black']);
            chess.placePiece(chessPiece, 0, 4);
            expect(chess.isValidPiece(0, 4)).toBe(false);
        });

        it('should return false if there is no chess piece in those coordinates', function() {
           expect(chess.isValidPiece(0,4)).toBe(false);
        });
    });

    describe('movePiece', function () {

        describe('general piece', function () {
            beforeEach(function () {
                chessPiece1 = new ChessPiece(['white']);
                chess.placePiece(chessPiece1, 0, 4);
            });

            it('should not be able to move a chess piece to a preoccupied spot in the same team', function () {
                chessPiece2 = new ChessPiece(['white']);
                chess.placePiece(chessPiece2, 1, 4);
                takenOutPiece = chess.movePiece(chessPiece1, 1, 4);
                expect(chess.board[0][4] instanceof ChessPiece).toBe(true);
                expect(chess.board[1][4] instanceof ChessPiece).toBe(true);
            });

            it('should change whose turn it is after moving a piece', function () {
                chess.movePiece(chessPiece1, 1, 4);
                expect(chess.turn).toBe('black');
            });

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