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

function addDisc(column) {
    availableSpot = connectFour.availableSpotInColumn(column);

    if(availableSpot != -1) {
        connectFour.addDisc(column, 1);
        $('.column-'+ column + ' .row-' + availableSpot).addClass('player-1-color');
    }
}