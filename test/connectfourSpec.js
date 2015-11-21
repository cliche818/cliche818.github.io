describe("initialization", function() {

    var board;

    beforeEach(function() {
        board = initializeBoard();
    });

    it("should have an empty board with no fill ins", function() {
        expect(board[0][0]).toBe(not_filled);
    });


});