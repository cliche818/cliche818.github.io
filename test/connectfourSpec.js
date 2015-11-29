describe("Connect Four", function () {

    var board;

    beforeEach(function () {
        board = initializeBoard();
    });

    describe("initialization", function () {
        it("should have an empty board with no fill ins", function () {
            for (var column = 0; column < 7; column++) {
                for (var row = 0; row < 6; row++) {
                    expect(board[column][row]).toBe(not_filled);
                }
            }
        });
    });

    describe("check if a space is filled", function () {
        it('should return false if a space is NOT filled', function () {
            expect(isFilled(board, 0, 0)).toBe(false);
        });

        it('should return true if a space is filled', function (){
           board[1][0] = 1;
           expect(isFilled(board, 1, 0)).toBe(true);
        });
    });

    describe("putting in a new piece", function () {
        it("should put the piece at the bottom of the board for column 1", function() {
            addDisc(board, 1, 1);
            expect(isFilled(board,1,0)).toBe(true);
        });

        it("should put the piece at the lowest possible place in column 1", function() {
            for (var row in [0,1,2,3,4,5,6]) {
                addDisc(board, 1, 2);
                expect(isFilled(board,1,row)).toBe(true);
            }
        });
    });

});



