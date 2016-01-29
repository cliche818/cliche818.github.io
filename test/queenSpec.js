describe('Queen', function () {
    var queen;

    beforeEach(function () {
        queen = new Queen();
    });

    describe('validMove', function () {
        beforeEach(function () {
            coordinate = new Coordinate();
            queen.coordinate = coordinate;
            coordinate.x = 4;
            coordinate.y = 4;
        });

        describe('provide a list of coordinates of steps to its destination', function () {
            it('going vertically', function () {
                expect(queen.path(7, 4)).toEqual([[5, 4], [6, 4]]);
                expect(queen.path(1, 4)).toEqual([[3, 4], [2, 4]]);
            });

            it('going horizontally', function () {
                expect(queen.path(4, 7)).toEqual([[4, 5], [4, 6]]);
                expect(queen.path(7, 4)).toEqual([[5, 4], [6, 4]]);
            });

            describe('going diagonally', function(){

                it('top left', function(){
                   expect(queen.path(1,1)).toEqual([3,3], [2,2]);
                });
            });
        });


    });
});