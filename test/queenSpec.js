describe('Queen', function () {
  var queen;

  beforeEach(function () {
    queen = new Queen();
  });

  describe('validMove', function () {
    beforeEach(function () {
      queen.coordinate = new Coordinate(4,4);
    });

    it('should return true for a valid move going horizontally', function() {
      expect(queen.validMove(7,4)).toBe(true);
      expect(queen.validMove(1,4)).toBe(true);
    });

    it('should return true for a valid move going verically', function() {
      expect(queen.validMove(4,5)).toBe(true);
      expect(queen.validMove(4,1)).toBe(true);
      expect(queen.validMove(4,7)).toBe(true);
    });

    it('should return true for a valid move going diagonal', function(){
      expect(queen.validMove(1,1)).toBe(true);
      expect(queen.validMove(7,1)).toBe(true);
      expect(queen.validMove(1,7)).toBe(true);
      expect(queen.validMove(7,7)).toBe(true);
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
});