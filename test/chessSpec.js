describe('Chess Game', function () {

    var chess;

    beforeEach(function () {
        chess = new Chess();
    });

    describe('placePiece', function () {
        it('should place a king on the board at a location on the board', function () {
            var king = new ChessPiece('king');
            chess.placePiece(king, 0, 4);
            expect(chess.board[0][4]).toBe(king);
            expect(king.x).toBe(0);
            expect(king.y).toBe(4);
        });

    });

    describe('movePiece', function () {
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
                expect(king.x).toBe(1);
                expect(king.y).toBe(4);
            });

            it('should not move a king two spot forward', function () {
                chess.movePiece(king, 2, 4);
                expect(chess.board[2][4]).toBe(undefined);
                expect(chess.board[0][4] instanceof King).toBe(true);
            });

        })


    });

});