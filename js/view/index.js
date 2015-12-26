$(function() {
    connectFour = new ConnectFourBoard();

    $('.column-0').on('click', function() {
        addDisc(0);
    });

    $('.column-1').on('click', function() {
        addDisc(1);
    });

    $('.column-2').on('click', function() {
        addDisc(2);
    });

    $('.column-3').on('click', function() {
        addDisc(3);
    });

    $('.column-4').on('click', function() {
        addDisc(4);
    });

    $('.column-5').on('click', function() {
        addDisc(5);
    });

    $('.column-6').on('click', function() {
        addDisc(6);
    });
});

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