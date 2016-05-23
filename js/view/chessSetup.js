/* Chess Jquery */

$(function () {
  /* set up chess board with chess piece */
  var chess = new Chess();
  var whiteKing = new King('white');
  var whiteQueen = new Queen('white');
  var whiteKnight = new Knight('white');
  var whiteKnight2 = new Knight('white');
  var whiteBishop = new Bishop('white');
  var whiteBishop2 = new Bishop('white');
  var whiteRook = new Rook('white');
  var whiteRook2 = new Rook('white');


  var blackKing = new King('black');
  var blackQueen = new Queen('black');
  var blackKnight = new Knight('black');
  var blackKnight2 = new Knight('black');
  var blackBishop = new Bishop('black');
  var blackBishop2 = new Bishop('black');
  var blackRook = new Rook('black');
  var blackRook2 = new Rook('black');

  chess.placePiece(whiteRook, 0, 0);
  chess.placePiece(whiteKnight, 1, 0);
  chess.placePiece(whiteBishop, 2, 0);
  chess.placePiece(whiteKing, 3, 0);
  chess.placePiece(whiteQueen, 4, 0);
  chess.placePiece(whiteBishop2, 5, 0);
  chess.placePiece(whiteKnight2, 6, 0);
  chess.placePiece(whiteRook2, 7, 0);

  chess.placePiece(blackRook, 0, 7);
  chess.placePiece(blackKnight, 1, 7);
  chess.placePiece(blackBishop, 2, 7);
  chess.placePiece(blackKing, 3, 7);
  chess.placePiece(blackQueen, 4, 7);
  chess.placePiece(blackBishop2, 5, 7);
  chess.placePiece(blackKnight2, 6, 7);
  chess.placePiece(blackRook2, 7, 7);

  $('#chess .row-0 .column-0').addClass(ChessPieceCSSClass(whiteRook));
  $('#chess .row-0 .column-1').addClass(ChessPieceCSSClass(whiteKnight));
  $('#chess .row-0 .column-2').addClass(ChessPieceCSSClass(whiteBishop));
  $('#chess .row-0 .column-3').addClass(ChessPieceCSSClass(whiteKing));
  $('#chess .row-0 .column-4').addClass(ChessPieceCSSClass(whiteQueen));
  $('#chess .row-0 .column-5').addClass(ChessPieceCSSClass(whiteBishop2));
  $('#chess .row-0 .column-6').addClass(ChessPieceCSSClass(whiteKnight2));
  $('#chess .row-0 .column-7').addClass(ChessPieceCSSClass(whiteRook2));

  $('#chess .row-7 .column-0').addClass(ChessPieceCSSClass(blackRook));
  $('#chess .row-7 .column-1').addClass(ChessPieceCSSClass(blackKnight));
  $('#chess .row-7 .column-2').addClass(ChessPieceCSSClass(blackBishop));
  $('#chess .row-7 .column-3').addClass(ChessPieceCSSClass(blackKing));
  $('#chess .row-7 .column-4').addClass(ChessPieceCSSClass(blackQueen));
  $('#chess .row-7 .column-5').addClass(ChessPieceCSSClass(blackBishop2));
  $('#chess .row-7 .column-6').addClass(ChessPieceCSSClass(blackKnight2));
  $('#chess .row-7 .column-7').addClass(ChessPieceCSSClass(blackRook2));

  /* initialize every grid spot with interactive click events */
  var selectingPiece = true;

  var currentSelectedPiece;

  for (var column = 0; column <= 7; column++) {
    for (var row = 0; row <= 7; row++) {
      var position = {x: column, y: row};
      $('.row-' + row).on('click', ' .column-' + column, position, function (event) {

        var y = event.data.y;
        var x = event.data.x;

        console.log('column:' + x + ' row:' + y);

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