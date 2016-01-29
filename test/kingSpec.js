describe('king', function () {
    var king;

    beforeEach(function () {
        king = new King();
    });

    describe('valid move', function () {
        beforeEach(function () {
            var coordinate = new Coordinate();
            coordinate.x = 1;
            coordinate.y = 1;
            king.coordinate = coordinate;
        });

        describe('should return true', function () {
            it('given a valid vertical destination coordinate', function () {
                expect(king.validMove(1, 2)).toBe(true);
                expect(king.validMove(1, 0)).toBe(true);
            });

            it('given a valid horizontal destination coordinate', function () {
                expect(king.validMove(2, 1)).toBe(true);
                expect(king.validMove(0, 1)).toBe(true);
            });

            it('given a valid diagonal destination coordinate', function () {
                expect(king.validMove(2, 2)).toBe(true);
                expect(king.validMove(0, 0)).toBe(true);
                expect(king.validMove(2, 0)).toBe(true);
                expect(king.validMove(0, 2)).toBe(true);
            });
        });

        describe('should return false', function() {
            it('given an invalid vertical destination coordinate', function() {
                expect(king.validMove(1, 5)).toBe(false);
                expect(king.validMove(1, 3)).toBe(false);
            });

            it('given an invalid horizontal destination coordinate', function() {
                expect(king.validMove(5, 1)).toBe(false);
                expect(king.validMove(3, 1)).toBe(false);
            });

            it('given a valid diagonal destination coordinate', function () {
                expect(king.validMove(3, 3)).toBe(false);
                expect(king.validMove(4, 4)).toBe(false);
                expect(king.validMove(3, 0)).toBe(false);
                expect(king.validMove(0, 3)).toBe(false);
            });
        });

    });

});