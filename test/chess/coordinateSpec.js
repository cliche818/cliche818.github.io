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

  describe('#verticalPath', function () {
    var coordinate = new Coordinate(4,4);

    it('should return a list of coordinates to the destination', function () {
      expect(coordinate.verticalPath(7, 4)).toEqual([[5, 4], [6, 4], [7, 4]]);
      expect(coordinate.verticalPath(0, 4)).toEqual([[3, 4], [2, 4], [1, 4], [0, 4]]);
    });

    it('should return a empty array if there is no path to destination', function() {
      expect(coordinate.verticalPath(0, 3)).toEqual([]);
    });
  });

  describe('#horizontalPath', function(){
    var coordinate = new Coordinate(4,4);

    it('should return a list of coordinates to the destination', function () {
      expect(coordinate.horizontalPath(4, 7)).toEqual([[4, 5], [4, 6], [4, 7]]);
      expect(coordinate.horizontalPath(4, 0)).toEqual([[4, 3], [4, 2], [4, 1], [4, 0]]);
    });

    it('should return a empty array if there is no path to destination', function() {
      expect(coordinate.horizontalPath(0, 3)).toEqual([]);
    });
  });
  
  describe('#diagonalPath', function(){
    var coordinate = new Coordinate(4,4);
    
    describe('should return a list of coordinates to the destination', function() {
      it('for bottom left', function () {
        expect(coordinate.diagonalPath(1, 1)).toEqual([[3, 3], [2, 2], [1, 1]]);
      });

      it('for bottom right', function() {
        expect(coordinate.diagonalPath(7, 1)).toEqual([[5, 3], [6, 2], [7, 1]]);
      });

      it('for top left', function() {
        expect(coordinate.diagonalPath(1, 7)).toEqual([[3, 5], [2, 6], [1, 7]]);
      });

      it('for top right', function() {
        expect(coordinate.diagonalPath(7, 7)).toEqual([[5, 5], [6, 6], [7, 7]]);
      });
    });

    it('should return an empty array if there is no path to destination', function(){
      expect(coordinate.diagonalPath(5,4)).toEqual([]);
      expect(coordinate.diagonalPath(6,4)).toEqual([]);
      expect(coordinate.diagonalPath(0,7)).toEqual([]);
    });
  });
});