describe('Bishop', function() {
  beforeEach(function(){
    bishop = new Bishop();
    bishop.coordinate = new Coordinate(4,4);
  });

  describe('validMove', function(){
    it('should return true if it is a diagonal location', function() {
      expect(bishop.validMove(7,1)).toBe(true);
      expect(bishop.validMove(6,2)).toBe(true);
      expect(bishop.validMove(5,3)).toBe(true);

      expect(bishop.validMove(3,5)).toBe(true);
      expect(bishop.validMove(2,6)).toBe(true);
      expect(bishop.validMove(1,7)).toBe(true);

      expect(bishop.validMove(3,3)).toBe(true);
      expect(bishop.validMove(2,2)).toBe(true);
      expect(bishop.validMove(1,1)).toBe(true);
      expect(bishop.validMove(0,0)).toBe(true);

      expect(bishop.validMove(5,5)).toBe(true);
      expect(bishop.validMove(6,6)).toBe(true);
      expect(bishop.validMove(7,7)).toBe(true);
    });

    it('should return false for non diagonal locations', function(){
      expect(bishop.validMove(3,4)).toBe(false);
      expect(bishop.validMove(5,4)).toBe(false);
      expect(bishop.validMove(4,0)).toBe(false);
      expect(bishop.validMove(4,7)).toBe(false);
      expect(bishop.validMove(2,1)).toBe(false);
      expect(bishop.validMove(6,7)).toBe(false);
    });
  });

  describe('#diagonalPath', function(){
    it('should return a list of coordinates to its possible destination', function(){
      var spy = sinon.spy(bishop.coordinate, 'diagonalPath');
      bishop.path(6,6);
      expect(spy.calledOnce).toBe(true);
    });
  });
});