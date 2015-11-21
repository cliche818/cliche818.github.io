
var filled = 1;
var not_filled = 0;

function initializeBoard() {
    var row_size = 6;
    var column_size = 7;
    var board = new Array(column_size);

    for(var i = 0; i < row_size; i++) {
        board[i] = new Array(row_size);

        for(var j = 0; j < column_size; j++) {
            board[i][j] = not_filled;
        }
    }

    return board;
}

