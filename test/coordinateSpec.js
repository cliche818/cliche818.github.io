describe('Coordinate', function () {
  describe('.equals', function () {
    it('should be true if x and y values are equal', function () {
      var coordinate = new Coordinate(1, 1);
      var coordinate2 = new Coordinate(1, 1);

      expect(coordinate.equals(coordinate2)).toBe(true);
    });

    it('should be false if x or y are not equal', function () {
      var coordinate = new Coordinate(1, 2);
      var coordinate2 = new Coordinate(1, 1);

      expect(coordinate.equals(coordinate2)).toBe(false);

      coordinate = new Coordinate(2, 1);
      coordinate2 = new Coordinate(1, 1);

      expect(coordinate.equals(coordinate2)).toBe(false);
    });
  });

  describe('.verticalPath', function () {
    var coordinate = new Coordinate(4,4);

    it('should return a list of coordinates to the destination', function () {
      expect(coordinate.verticalPath(7, 4)).toEqual([[5, 4], [6, 4], [7, 4]]);
      expect(coordinate.verticalPath(0, 4)).toEqual([[3, 4], [2, 4], [1, 4], [0, 4]]);
    });

    it('should return a empty array if there is no path to destination', function() {
      expect(coordinate.verticalPath(0, 3)).toEqual([]);
    });
  });
});