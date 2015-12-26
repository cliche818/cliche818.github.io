$(function() {
    connectFour = new ConnectFourBoard();

    for(var column = 0; column < 7; column++) {
        bindAddDiscToColumn(column);
    }

});

function bindAddDiscToColumn(column) {
    $('.column-' + column).on('click', function () {
        console.log(column);
        addDisc(column);
    });
}

function endGame() {
    $('.ingame-message').text('Winner: Player ' + connectFour.currentPlayer());
    $('.column-0').off();
    $('.column-1').off();
    $('.column-2').off();
    $('.column-3').off();
    $('.column-4').off();
    $('.column-5').off();
    $('.column-6').off();
}

function addDisc(column) {
    availableSpot = connectFour.availableSpotInColumn(column);

    if(availableSpot != -1) {
        connectFour.addDisc(column, 1);

        $('.column-'+ column + ' .row-' + availableSpot).addClass('player-' + connectFour.currentPlayer() + '-color');


        if (connectFour.winner(column) != -1) {
            endGame();

        } else {
            connectFour.changePlayer();
            $('.ingame-message').text('Player' + connectFour.currentPlayer() + '\'s turn');
        }

    }
}