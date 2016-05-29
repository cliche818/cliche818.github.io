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

  describe('#path', function(){
    describe('should return a list of coordinates to its possible coordinates', function(){
      it('for a vertical path', function(){
        var spy = sinon.spy(rook.coordinate, 'verticalPath');
        rook.path(6,4);
        expect(spy.calledOnce).toBe(true);
      });

      it('for a horizontal path', function(){
        var spy = sinon.spy(rook.coordinate, 'horizontalPath');
        rook.path(4,6);
        expect(spy.calledOnce).toBe(true);
      });
    });
  });

  describe('#killPath', function(){
    it('should return a set of coordinates to destination for a kill', function () {
      var spy = sinon.spy(rook, 'path');
      var coordinates = rook.killPath(4, 7);
      expect(coordinates).toEqual([[4, 5], [4, 6], [4, 7]]);
      expect(spy.calledOnce).toBe(true);
    });
  });

});