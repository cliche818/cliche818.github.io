describe('king', function () {
    var king;

    beforeEach(function () {
        king = new King();
    });

    describe('valid move', function() {

       describe('should return true', function(){
           beforeEach(function(){
               king.row = 1;
               king.column = 1;
           });

           it('given a valid vertical destination coordinate', function() {
               expect(king.validMove(1, 2)).toBe(true);
               expect(king.validMove(1, 0)).toBe(true);
           });

           it('given a valid horizontal destination coordinate', function() {
              expect(king.validMove(2,1)).toBe(true);
              expect(king.validMove(0,1)).toBe(true);
           });
       });

    });

});