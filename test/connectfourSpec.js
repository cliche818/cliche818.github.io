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
            expect(connectFourBoard.isFilled(0, 0)).toBe(false);
        });

        it("should put the piece at the bottom of the connectFourBoard for column 1", function () {
            connectFourBoard.addDisc(1, 1);
            expect(connectFourBoard.isFilled(1, 0)).toBe(true);

        });

    });

    describe("#availableSpotInColumn", function () {
        it('should return 0 for an empty column', function () {
            expect(connectFourBoard.availableSpotInColumn(0)).toBe(0);
        });

        it('should return 2 for a column filled in twice already', function () {
            connectFourBoard.addDisc(0, 1);
            connectFourBoard.addDisc(0, 1);
            expect(connectFourBoard.availableSpotInColumn(0)).toBe(2);
        });

        it('should return -1 if a column is filled to the max', function () {
            for (var row = 0; row < 6; row++) {
                connectFourBoard.addDisc(0, 1);
            }

            expect(connectFourBoard.availableSpotInColumn(0)).toBe(-1);
        });
    });

    describe("#addDisc", function () {
        it("should put the piece at the lowest possible place in column 1", function () {
            for (var column in [0, 1, 2, 3, 4, 5, 6]) {
                connectFourBoard.addDisc(column, 2);
                expect(connectFourBoard.isFilled(column, 0)).toBe(true);
                expect(connectFourBoard.isFilled(column, 1)).toBe(false);
            }
        });
    });


    describe("#changePlayer", function () {
        it("should change the current player to someone else", function () {
            connectFourBoard.changePlayer();
            expect(connectFourBoard.playerOne).toBe(false);
        });

        it("should be back to player one's turn at the third turn", function () {
            connectFourBoard.changePlayer();
            connectFourBoard.changePlayer();
            expect(connectFourBoard.playerOne).toBe(true);
        });
    });

    describe("#currentPlayer", function () {
        it("should return the current player number", function () {
            expect(connectFourBoard.currentPlayer()).toBe(1);
        });

        it("should return the current player number after a turn", function () {
            connectFourBoard.changePlayer();
            expect(connectFourBoard.currentPlayer()).toBe(2);
        });
    });

    describe("winner", function () {

        describe("if there is no winner from last play", function () {
            it("should return false at the beginning of a match", function () {
                for (var column in [0, 1, 2, 3, 4, 5, 6]) {
                    expect(connectFourBoard.winner(column)).toBe(false);
                }
            });

            it("should return false after a play", function () {
                connectFourBoard.addDisc(1, 1);
                expect(connectFourBoard.winner(1)).toBe(false);
            });
        });


        describe("if there is a winner from the last play", function () {
            it("should return true when there is a horizontal row of 4", function () {
                connectFourBoard.addDisc(1, 1);
                connectFourBoard.addDisc(2, 1);
                connectFourBoard.addDisc(3, 1);
                connectFourBoard.addDisc(4, 1);

                expect(connectFourBoard.winner(4)).toBe(true);
                expect(connectFourBoard.winner(3)).toBe(true);
                expect(connectFourBoard.winner(2)).toBe(true);
                expect(connectFourBoard.winner(1)).toBe(true);
            });

            it("should return true when there is a vertical of 4", function () {
                connectFourBoard.addDisc(1, 1);
                connectFourBoard.addDisc(1, 1);
                connectFourBoard.addDisc(1, 1);
                connectFourBoard.addDisc(1, 1);

                expect(connectFourBoard.winner(1)).toBe(true);
            });

            it("should return true when there is diagonal going top to bottom of 4", function () {
                connectFourBoard.board = [[2, 2, 2, 1, 0, 0], [2, 2, 1, 0, 0, 0], [2, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];

                expect(connectFourBoard.winner(3)).toBe(true);
                expect(connectFourBoard.winner(2)).toBe(true);
                expect(connectFourBoard.winner(1)).toBe(true);
                expect(connectFourBoard.winner(0)).toBe(true);

            });

            it("should return true when there is diagonal going bottom to top of 4", function () {
                connectFourBoard.board = [[1, 0, 0, 0, 0, 0], [2, 1, 0, 0, 0, 0], [2, 2, 1, 0, 0, 0], [2, 2, 2, 1, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];

                expect(connectFourBoard.winner(3)).toBe(true);
                expect(connectFourBoard.winner(2)).toBe(true);
                expect(connectFourBoard.winner(1)).toBe(true);
                expect(connectFourBoard.winner(0)).toBe(true);
            });
        });

    });

});



