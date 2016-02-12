describe('Chess Game', function () {

    var chess;

    beforeEach(function () {
        chess = new Chess();
    });

    describe('placePiece', function () {
        it('should place a king on the board at a location on the board', function () {
            var king = new ChessPiece('white');
            chess.placePiece(king, 0, 4);
            expect(chess.board[0][4]).toBe(king);

            coord = king.coordinate;
            expect(coord.x).toBe(0);
            expect(coord.y).toBe(4);
        });
    });

    describe('movePiece', function () {

        describe('general piece', function() {
            beforeEach(function(){
                chessPiece1 = new ChessPiece('white');
                chess.placePiece(chessPiece1, 0, 4);
            });

            it('should not be able to move a chess piece to a preoccupied spot in the same team', function() {
                chessPiece2 = new ChessPiece('white');
                chess.placePiece(chessPiece2, 1, 4);
                chess.movePiece(chessPiece1, 1, 4);
                expect(chess.board[0][4] instanceof ChessPiece).toBe(true);
                expect(chess.board[1][4] instanceof ChessPiece).toBe(true);
            });

            it('should allow a chess piece to go to a preoccupied spot from different team and remove that piece', function(){
                chessPiece2 = new ChessPiece('black');
                chess.placePiece(chessPiece2, 1, 4);
                chess.movePiece(chessPiece1, 1, 4);
                expect(chess.board[0][4] instanceof ChessPiece).toBe(false);
                expect(chess.board[1][4] instanceof ChessPiece).toBe(true);
            });
        });

        describe('king', function () {
            var king;
            beforeEach(function(){
                king = new King();
                chess.placePiece(king, 0, 4);
            });

            it('should move a king one spot forward', function () {
                chess.movePiece(king, 1, 4);
                expect(chess.board[0][4]).toBe(undefined);
                expect(chess.board[1][4] instanceof King).toBe(true);

                coord = king.coordinate
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