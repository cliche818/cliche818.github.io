describe('Coordinate', function () {

  describe('.equals', function () {

    it('should be true if x and y values are equal', function () {
      var coordinate = new Coordinate(1, 1);
      var coordinate2 = new Coordinate(1, 1);

      expect(coordinate.equals(coordinate2)).toBe(true);
    });

    it('should be false if x or y are not equal', function() {
      var coordinate = new Coordinate(1, 2);
      var coordinate2 = new Coordinate(1, 1);

      expect(coordinate.equals(coordinate2)).toBe(false);

      coordinate = new Coordinate(2, 1);
      coordinate2 = new Coordinate(1, 1);

      expect(coordinate.equals(coordinate2)).toBe(false);
    });
  });
});