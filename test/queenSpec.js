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

    it('is a valid move going horizontally', function() {
      expect(queen.validMove(7,4)).toBe(true);
    });

    it('is a valid move going verically', function() {
      expect(queen.validMove(4,5)).toBe(true);
    });

    it('is a not valid move', function() {
      expect(queen.validMove(5,6)).toBe(false);
      expect(queen.validMove(5,7)).toBe(false);
      expect(queen.validMove(7,5)).toBe(false);
      expect(queen.validMove(7,6)).toBe(false);
      expect(queen.validMove(1,3)).toBe(false);
      expect(queen.validMove(3,1)).toBe(false);
    });

  });


  describe('path', function () {
    beforeEach(function () {
      coordinate = new Coordinate();
      queen.coordinate = coordinate;
      coordinate.x = 4;
      coordinate.y = 4;
    });

    it('going vertically, provide a list of coordinates of steps to its destination', function () {
      expect(queen.path(7, 4)).toEqual([[5, 4], [6, 4], [7, 4]]);
      expect(queen.path(1, 4)).toEqual([[3, 4], [2, 4], [1, 4]]);
    });

    it('going horizontally, provide a list of coordinates of steps to its destination', function () {
      expect(queen.path(4, 7)).toEqual([[4, 5], [4, 6], [4, 7]]);
      expect(queen.path(4, 1)).toEqual([[4, 3], [4, 2], [4, 1]]);
    });

    describe('going diagonally, provide a list of coordinates of steps to its destination', function () {
      it('bottom left', function () {
        expect(queen.path(1, 1)).toEqual([[3, 3], [2, 2], [1, 1]]);
      });

      it('bottom right', function() {
        expect(queen.path(7, 1)).toEqual([[5, 3], [6, 2], [7, 1]]);
      });

      it('top left', function() {
        expect(queen.path(1, 7)).toEqual([[3, 5], [2, 6], [1, 7]]);
      });

      it('top right', function() {
        expect(queen.path(7, 7)).toEqual([[5, 5], [6, 6], [7, 7]]);
      });
    });

    it('return empty array if its an impossible path', function() {
      expect(queen.path(5,6)).toEqual([]);
      expect(queen.path(5,7)).toEqual([]);
      expect(queen.path(7,5)).toEqual([]);
      expect(queen.path(7,6)).toEqual([]);
      expect(queen.path(1,3)).toEqual([]);
      expect(queen.path(3,1)).toEqual([]);
    });
  });
});