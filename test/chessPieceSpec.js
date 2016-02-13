describe('Chess Piece', function () {
    var chessPiece;

    beforeEach(function () {
        chessPiece = new ChessPiece('white');

    });

    describe('valid move', function () {
        beforeEach(function () {
            var coordinate = new Coordinate();
            coordinate.x = 1;
            coordinate.y = 1;
            chessPiece.coordinate = coordinate;
        });

        it('should return true when given a coordinate', function () {
            expect(chessPiece.validMove(3, 4)).toBe(true);
        });

        it('should return false when given out of board coordinates', function () {
            expect(chessPiece.validMove(-1, 0)).toBe(false);
            expect(chessPiece.validMove(0, -1)).toBe(false);
        });

        it('should return false when given the same coordinate it is currently on', function () {
            expect(chessPiece.validMove(1, 1)).toBe(false);
        });
    });

    describe('isSameTeam', function () {
        it('should return true if same team', function () {
            expect(chessPiece.isSameTeam('white')).toBe(true);
        });

        it('should return false if different team', function () {
            expect(chessPiece.isSameTeam('black')).toBe(false);
        });
    });
});