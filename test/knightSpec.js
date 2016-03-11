describe('knight', function(){
  var knight;

  beforeEach(function(){
    knight = new Knight();
  });

  describe('validMove', function(){
    beforeEach(function () {
      knight.coordinate = new Coordinate(4,4);
    });

    it('should be valid for the L shape path', function(){
      expect(knight.validMove(3,6)).toBe(true);
      expect(knight.validMove(5,6)).toBe(true);

    });
  });
});