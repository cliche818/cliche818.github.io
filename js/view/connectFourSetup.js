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