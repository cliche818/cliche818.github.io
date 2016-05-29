describe('Queen', function () {
  var queen;

  beforeEach(function () {
    queen = new Queen();
    queen.coordinate = new Coordinate(4, 4);
  });

  describe('validMove', function () {
    it('should return true for a valid move going horizontally', function () {
      expect(queen.validMove(7, 4)).toBe(true);
      expect(queen.validMove(1, 4)).toBe(true);
    });

    it('should return true for a valid move going verically', function () {
      expect(queen.validMove(4, 5)).toBe(true);
      expect(queen.validMove(4, 1)).toBe(true);
      expect(queen.validMove(4, 7)).toBe(true);
    });

    it('should return true for a valid move going diagonal', function () {
      expect(queen.validMove(1, 1)).toBe(true);
      expect(queen.validMove(7, 1)).toBe(true);
      expect(queen.validMove(1, 7)).toBe(true);
      expect(queen.validMove(7, 7)).toBe(true);
    });

    it('is a not valid move', function () {
      expect(queen.validMove(5, 6)).toBe(false);
      expect(queen.validMove(5, 7)).toBe(false);
      expect(queen.validMove(7, 5)).toBe(false);
      expect(queen.validMove(7, 6)).toBe(false);
      expect(queen.validMove(1, 3)).toBe(false);
      expect(queen.validMove(3, 1)).toBe(false);
    });

  });

  describe('#path', function () {
    describe('should return a list of coordinates to its destination', function () {
      it('for a horizontal path', function () {
        var spy = sinon.spy(queen.coordinate, 'horizontalPath');
        var coordinates = queen.path(4, 7);
        expect(coordinates).toEqual([[4, 5], [4, 6], [4, 7]]);
        expect(spy.calledOnce).toBe(true);
      });

      it('for a vertical path', function () {
        var spy = sinon.spy(queen.coordinate, 'verticalPath');
        var coordinates = queen.path(6, 4);
        expect(coordinates).toEqual([[5, 4], [6, 4]]);
        expect(spy.calledOnce).toBe(true);
      });

      it('for a horizonal path', function () {
        var spy = sinon.spy(queen.coordinate, 'diagonalPath');
        var coordinates = queen.path(6, 6);
        expect(coordinates).toEqual([[5, 5], [6, 6]]);
        expect(spy.calledOnce).toBe(true);
      });
    });
  });

  describe('#killPath', function () {
    it('should return a set of coordinates to destination for a kill', function () {
      var spy = sinon.spy(queen, 'path');
      var coordinates = queen.killPath(4, 7);
      expect(coordinates).toEqual([[4, 5], [4, 6], [4, 7]]);
      expect(spy.calledOnce).toBe(true);
    });
  });
});