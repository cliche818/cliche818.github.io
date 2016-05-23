describe('Rook', function(){
  var rook;

  beforeEach(function(){
    rook = new Rook();
    rook.coordinate = new Coordinate(4,4);
  });

  describe('#validMove', function(){
    it('should return true if its a vertical path', function(){
      expect(rook.validMove(7,4)).toBe(true);
      expect(rook.validMove(0,4)).toBe(true);
    });

    it('should return true if its a horizontal path', function(){
      expect(rook.validMove(4,7)).toBe(true);
      expect(rook.validMove(4,0)).toBe(true);
    });

    it('should return false if its not a valid path', function(){
      expect(rook.validMove(7,5)).toBe(false);
      expect(rook.validMove(6,5)).toBe(false);
    });
  });

});