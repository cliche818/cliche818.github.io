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
  var whiteKnight = new Knight('white');
  var whiteKnight2 = new Knight('white');


  var blackKing = new King('black');
  var blackQueen = new Queen('black');
  var blackKnight = new Knight('black');
  var blackKnight2 = new Knight('black');


  chess.placePiece(whiteKing, 3, 0);
  chess.placePiece(whiteQueen, 4, 0);
  chess.placePiece(whiteKnight, 1, 0);
  chess.placePiece(whiteKnight2, 6, 0);

  chess.placePiece(blackKing, 3, 7);
  chess.placePiece(blackQueen, 4, 7);
  chess.placePiece(blackKnight, 1, 7);
  chess.placePiece(blackKnight2, 6, 7);



  $('#chess .row-0 .column-3').addClass(ChessPieceCSSClass(whiteKing));
  $('#chess .row-0 .column-4').addClass(ChessPieceCSSClass(whiteQueen));
  $('#chess .row-0 .column-1').addClass(ChessPieceCSSClass(whiteKnight));
  $('#chess .row-0 .column-6').addClass(ChessPieceCSSClass(whiteKnight2));


  $('#chess .row-7 .column-3').addClass(ChessPieceCSSClass(blackKing));
  $('#chess .row-7 .column-4').addClass(ChessPieceCSSClass(blackQueen));
  $('#chess .row-7 .column-1').addClass(ChessPieceCSSClass(blackKnight));
  $('#chess .row-7 .column-6').addClass(ChessPieceCSSClass(blackKnight2));

  /* initialize every grid spot with interactive click events */
  var selectingPiece = true;

  var currentSelectedPiece;

  for (var column = 0; column <= 7; column++) {
    for (var row = 0; row <= 7; row++) {
      var position = {x: column, y: row};
      $('.row-' + row).on('click', ' .column-' + column, position, function (event) {

        var y = event.data.y;
        var x = event.data.x;

        if (selectingPiece) {
          if (chess.isPiecePlayable(x, y)) {
            currentSelectedPiece = chess.board[x][y];
            selectingPiece = false;
            $('#chess .ingame-message').text('Team: ' + chess.turn + ', Move Piece: ' + currentSelectedPiece.name);
          }
        } else {
          if (currentSelectedPiece.validMove(x, y)) {
            var chessPieceCSSClass = ChessPieceCSSClass(currentSelectedPiece);

            var previousX = currentSelectedPiece.coordinate.x;
            var previousY = currentSelectedPiece.coordinate.y;
            var returnedPiece = chess.movePiece(currentSelectedPiece, x, y);

            if (returnedPiece == null) {
              //invalid move, don't do anything
            } else {
              //remove piece from previous position
              $('#chess .row-' + previousY + ' .column-' + previousX).removeClass(chessPieceCSSClass);

              if (typeof returnedPiece != currentSelectedPiece) {
                var killedPieceCSSClass = ChessPieceCSSClass(returnedPiece);
                $('#chess .row-' + currentSelectedPiece.coordinate.y + ' .column-' + currentSelectedPiece.coordinate.x).removeClass(killedPieceCSSClass);
              }
              //add piece to new position
              $('#chess .row-' + currentSelectedPiece.coordinate.y + ' .column-' + currentSelectedPiece.coordinate.x).addClass(chessPieceCSSClass);
            }

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