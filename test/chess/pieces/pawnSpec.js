describe('Pawn', function(){
  describe('#validPath', function(){
    describe('for up direction', function(){
      beforeEach(function(){
        pawn = new Pawn('white', 'up');
        pawn.coordinate = new Coordinate(3,1);
      });

      it('return true for one spot above itself', function(){
        expect(pawn.validMove(3,2)).toBe(true);
      });

      it('return true for two spots above itself only if its first move', function(){
        pawn.numberOfMoves = 0;
        expect(pawn.validMove(3,3)).toBe(true);

        pawn.numberOfMoves = 1;
        expect(pawn.validMove(3,3)).toBe(false);
      });

      it('returns false for any other moves', function(){
        expect(pawn.validMove(3,4)).toBe(false);
      });
    });

    describe('for down direction', function(){
      beforeEach(function(){
        pawn = new Pawn('white', 'down');
        pawn.coordinate = new Coordinate(3,6);
      });

      it('return true for one spot above itself', function(){
        expect(pawn.validMove(3,5)).toBe(true);
      });

      it('return true for two spots above itself only if its first move', function(){
        pawn.numberOfMoves = 0;
        expect(pawn.validMove(3,4)).toBe(true);

        pawn.numberOfMoves = 1;
        expect(pawn.validMove(3,4)).toBe(false);
      });

      it('returns false for any other moves', function(){
        expect(pawn.validMove(3,3)).toBe(false);
      });
    });
  });
  
  describe('#killPath', function(){
    it('should return the lower diagonal coordinate for a kill for pawns going downward', function(){
      pawn = new Pawn('white', 'down');
      pawn.coordinate = new Coordinate(3,6);
      
      expect(pawn.killPath(2,5)).toEqual([[2,5]]);
      expect(pawn.killPath(4,5)).toEqual([[4,5]]);
    });

    it('should return the upper diagonal coordinate for a kill for pawns going upward', function(){
      pawn = new Pawn('white', 'up');
      pawn.coordinate = new Coordinate(3,2);

      expect(pawn.killPath(2,3)).toEqual([[2,3]]);
      expect(pawn.killPath(4,3)).toEqual([[4,3]]);
    });
  });
});