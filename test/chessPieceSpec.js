describe('Chess Piece', function () {
    var chessPiece;

    beforeEach(function () {
        chessPiece = new ChessPiece();

    });

    describe('valid move', function () {
        beforeEach(function () {
            chessPiece.x = 1;
            chessPiece.y = 1;
        });

        it('should return false when given out of board coordinates', function () {
            expect(chessPiece.validMove(-1, 0)).toBe(false);
            expect(chessPiece.validMove(0, -1)).toBe(false);
        });

        it('should return false when given the same coordinate it is currently on', function () {
            expect(chessPiece.validMove(1, 1)).toBe(false);
        });
    });
});