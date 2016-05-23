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
      expect(knight.validMove(6,3)).toBe(true);
      expect(knight.validMove(6,5)).toBe(true);
      expect(knight.validMove(2,3)).toBe(true);
      expect(knight.validMove(2,5)).toBe(true);
      expect(knight.validMove(3,6)).toBe(true);
      expect(knight.validMove(3,2)).toBe(true);
      expect(knight.validMove(5,6)).toBe(true);
      expect(knight.validMove(5,2)).toBe(true);
    });

    it('should be not valid for a non L shape path', function(){
      expect(knight.validMove(3,3)).toBe(false);
      expect(knight.validMove(3,4)).toBe(false);
      expect(knight.validMove(3,5)).toBe(false);
      expect(knight.validMove(6,6)).toBe(false);
      expect(knight.validMove(5,5)).toBe(false);
    })
  });
});