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
        expect(pawn.validMove(3,3, true)).toBe(true);
        expect(pawn.validMove(3,3, false)).toBe(false);
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
        expect(pawn.validMove(3,4, true)).toBe(true);
        expect(pawn.validMove(3,4, false)).toBe(false);
      });

      it('returns false for any other moves', function(){
        expect(pawn.validMove(3,3)).toBe(false);
      });
    });
  });
});