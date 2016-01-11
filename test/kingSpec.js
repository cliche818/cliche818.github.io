describe('king', function () {
    var king;

    beforeEach(function () {
        king = new King();
    });

    describe('valid move', function () {
        beforeEach(function () {
            king.x = 1;
            king.y = 1;
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
            xit('given an invalid vertical destination coordinate', function() {

            });
        });

    });

});