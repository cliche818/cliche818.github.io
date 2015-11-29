describe("Connect Four Board", function () {

    var connectFourBoard;

    beforeEach(function () {
        //connectFourBoard = initializeBoard();
        connectFourBoard = new ConnectFourBoard();
    });

    describe("initialization", function () {
        it("should have an empty connectFourBoard with no fill ins", function () {
            for (var column = 0; column < 7; column++) {
                for (var row = 0; row < 6; row++) {
                    expect(connectFourBoard.isFilled(column, row)).toBe(false);
                }
            }
        });
    });

    describe("#is_filled", function () {
        it('should return false if a space is NOT filled', function () {
            expect(connectFourBoard.isFilled(0,0)).toBe(false);
        });

        it("should put the piece at the bottom of the connectFourBoard for column 1", function() {
            connectFourBoard.addDisc(1, 1);
            expect(connectFourBoard.isFilled(1,0)).toBe(true);

        });

    });

    describe("#addDisc", function () {
        it("should put the piece at the lowest possible place in column 1", function() {
            for (var column in [0,1,2,3,4,5,6]) {
                connectFourBoard.addDisc(column, 2);
                expect(connectFourBoard.isFilled(column,0)).toBe(true);
                expect(connectFourBoard.isFilled(column,1)).toBe(false);
            }
        });
    });

    describe("winner", function() {
        it("should return false if no winner", function() {
            expect(connectFourBoard.winner()).toBe(false);
        });

       xdescribe("if there is a winner", function() {
            it("should return the winner when there is a vertical row of 4", function() {
                connectFourBoard.addDisc(1,1);
                connectFourBoard.addDisc(2,1);
                connectFourBoard.addDisc(3,1);
                connectFourBoard.addDisc(4,1);

                expect(connectFourBoard.winner()).toBe(true);
            });


       });
    });

});



