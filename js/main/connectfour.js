var not_filled = 0;

function initializeBoard() {
    var row_size = 6;
    var column_size = 7;
    var board = new Array(column_size);

    for(var i = 0; i < column_size; i++) {
        board[i] = new Array(row_size);

        for(var j = 0; j < row_size; j++) {
            board[i][j] = not_filled;
        }
    }
    return board;
}

function isFilled(board, column, row){
    return board[column][row] != not_filled ? true : false;
}



