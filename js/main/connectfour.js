function ConnectFourBoard() {
    this.board = initializeBoard();
}

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

ConnectFourBoard.prototype = {
    constructor: function(){
        this.board = initializeBoard();
    },

    addDisc: function(column, player) {
        for (var row in [0,1,2,3,4,5,6]) {
            if (!this.isFilled(column, row)) {
                this.board[column][row] = player;
                break;
            }
        }
    },

    isFilled: function(column, row){
        return this.board[column][row] == not_filled ? false : true;
    },

    winner: function(){
        return false;
    }

};


