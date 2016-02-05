/* Connect four jquery */

$(function() {
    connectFour = new ConnectFourBoard();

    for(var column = 0; column < 7; column++) {
        bindAddDiscToColumn(column);
    }

});

function bindAddDiscToColumn(column) {
    $('#connect-four .column-' + column).on('click', function () {
        addDisc(column);
    });
}

function endGame() {
    $('#connect-four .ingame-message').text('Winner: Player ' + connectFour.currentPlayer());
    $('#connect-four .column-0').off();
    $('#connect-four .column-1').off();
    $('#connect-four .column-2').off();
    $('#connect-four .column-3').off();
    $('#connect-four .column-4').off();
    $('#connect-four .column-5').off();
    $('#connect-four .column-6').off();
}

function addDisc(column) {
    availableSpot = connectFour.availableSpotInColumn(column);

    if(availableSpot != -1) {
        connectFour.addDisc(column, connectFour.currentPlayer());

        $('.column-'+ column + ' .row-' + availableSpot).addClass('player-' + connectFour.currentPlayer() + '-color');


        if (connectFour.winner(column) != -1) {
            endGame();

        } else {
            connectFour.changePlayer();
            $('#connect-four .ingame-message').text('Player' + connectFour.currentPlayer() + '\'s turn');
        }

    }
}

/* Chess Jquery */

$(function() {
    /* set up chess board with chess piece */
    var chess = new Chess();
    var whiteKing = new King();
    var blackKing = new King();
    chess.placePiece(whiteKing, 3, 0);
    chess.placePiece(blackKing, 3, 7);

    $('#chess .row-0 .column-3').addClass('white-king-piece');
    $('#chess .row-7 .column-3').addClass('white-king-piece');

    /* initialize every grid spot with interactive click events */
    var selectingPiece = true;

    var currentSelectedPiece;

    for(var column = 0; column <= 7; column++) {
        for(var row = 0; row <= 7; row++) {
            var position = { x: column, y: row};
            $('.row-' + row).on('click', ' .column-' + column, position , function(event) {

                var y = event.data.y;
                var x = event.data.x;

                console.log(y);
                console.log(x);

                if (selectingPiece) {
                    console.log(chess.board);
                    currentSelectedPiece = chess.board[x][y];
                    selectingPiece = false;
                    $('#chess .ingame-message').text('Move Piece: ' + currentSelectedPiece.name);
                } else {

                    if (currentSelectedPiece.validMove(x, y)) {
                        console.log('Moving Piece');
                        console.log('King column:' + currentSelectedPiece.coordinate.y + ' row:' + currentSelectedPiece.coordinate.x);

                        $('#chess .row-' + currentSelectedPiece.coordinate.y + ' .column-' + currentSelectedPiece.coordinate.x).removeClass('white-king-piece');//remove piece from previous position
                        chess.movePiece(currentSelectedPiece, x, y);
                        $('#chess .row-' + currentSelectedPiece.coordinate.y + ' .column-' + currentSelectedPiece.coordinate.x).addClass('white-king-piece');//add piece to new position

                        selectingPiece = true;
                        $('#chess .ingame-message').text('Select Piece');
                    }
                }
            });
        }
    }
});