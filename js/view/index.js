/* Connect four jquery */

$(function () {
  connectFour = new ConnectFourBoard();

  for (var column = 0; column < 7; column++) {
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

  if (availableSpot != -1) {
    connectFour.addDisc(column, connectFour.currentPlayer());

    $('.column-' + column + ' .row-' + availableSpot).addClass('player-' + connectFour.currentPlayer() + '-color');


    if (connectFour.winner(column) != -1) {
      endGame();

    } else {
      connectFour.changePlayer();
      $('#connect-four .ingame-message').text('Player' + connectFour.currentPlayer() + '\'s turn');
    }

  }
}

/* Chess Jquery */

$(function () {
  /* set up chess board with chess piece */
  var chess = new Chess();
  var whiteKing = new King('white');
  var whiteQueen = new Queen('white');

  var blackKing = new King('black');
  var blackQueen = new Queen('black');

  chess.placePiece(whiteKing, 3, 0);
  chess.placePiece(whiteQueen, 4, 0);

  chess.placePiece(blackKing, 3, 7);
  chess.placePiece(blackQueen, 4, 7);

  $('#chess .row-0 .column-3').addClass(ChessPieceCSSClass(whiteKing));
  $('#chess .row-0 .column-4').addClass(ChessPieceCSSClass(whiteQueen));

  $('#chess .row-7 .column-3').addClass(ChessPieceCSSClass(blackKing));
  $('#chess .row-7 .column-4').addClass(ChessPieceCSSClass(blackQueen));

  /* initialize every grid spot with interactive click events */
  var selectingPiece = true;

  var currentSelectedPiece;

  for (var column = 0; column <= 7; column++) {
    for (var row = 0; row <= 7; row++) {
      var position = {x: column, y: row};
      $('.row-' + row).on('click', ' .column-' + column, position, function (event) {

        var y = event.data.y;
        var x = event.data.x;

        console.log(y);
        console.log(x);

        if (selectingPiece) {
          console.log(chess.board);
          if (chess.isPiecePlayable(x, y)) {
            currentSelectedPiece = chess.board[x][y];
            selectingPiece = false;
            $('#chess .ingame-message').text('Team: ' + chess.turn + ', Move Piece: ' + currentSelectedPiece.name);
          }
        } else {
          if (currentSelectedPiece.validMove(x, y)) {
            console.log('Moving Piece');
            console.log('Piece column:' + currentSelectedPiece.coordinate.y + ' row:' + currentSelectedPiece.coordinate.x);

            var chessPieceCSSClass = ChessPieceCSSClass(currentSelectedPiece);
            console.log(currentSelectedPiece);

            //remove piece from previous position
            $('#chess .row-' + currentSelectedPiece.coordinate.y + ' .column-' + currentSelectedPiece.coordinate.x).removeClass(chessPieceCSSClass);
            killedPiece = chess.movePiece(currentSelectedPiece, x, y);

            if (typeof killedPiece !== 'undefined') {
              var killedPieceCSSClass = ChessPieceCSSClass(killedPiece);
              console.log('killed PIECE:' + killedPieceCSSClass);
              $('#chess .row-' + currentSelectedPiece.coordinate.y + ' .column-' + currentSelectedPiece.coordinate.x).removeClass(killedPieceCSSClass);
            }
            //add piece to new position
            $('#chess .row-' + currentSelectedPiece.coordinate.y + ' .column-' + currentSelectedPiece.coordinate.x).addClass(chessPieceCSSClass);

            if (chess.winner() !== null) {
              $('#chess .ingame-message').text('Winner: ' + chess.winner());
              $('#chess *').off();
            } else {
              selectingPiece = true;
              $('#chess .ingame-message').text('Team: ' + chess.turn + ', Select Piece');
            }
          }
        }
      });
    }
  }
});

function ChessPieceCSSClass(chessPiece) {
  return chessPiece.team + '-' + chessPiece.name + '-piece';
}