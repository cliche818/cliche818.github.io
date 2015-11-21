describe("initialization", function() {

    var board;

    beforeEach(function() {
        board = initializeBoard();
    });

    it("should have an empty board with no fill ins", function() {
        for(var column = 0; column < 7; column++) {
            for(var row = 0; row < 6; row++) {
                expect(board[column][row]).toBe(not_filled);
            }
        }
    });


});

describe("putting in a new piece", function() {

});

