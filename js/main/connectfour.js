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
        return this.board[column][row] === not_filled ? false : true;
    },

    isPlayerDiscInSpot: function (column, row, player) {
        return this.board[column][row] === player;
    },

    winner: function(column){
        var last_played_row;

        for (var row = 5 ; row >= 0; row --) {
            if (this.isFilled(column, row)) {
                last_played_row = row;
                break;
            }
        }

        if (last_played_row === undefined) {
            return false;
        }

        var last_player = this.board[column][last_played_row];

        if (this.number_of_connects_horizontally(column, last_played_row, last_player) >= 4) {
            return true;
        } else if (this.number_of_connects_vertically(column, last_played_row, last_player) >= 4) {
            return true;
        } else if (this.number_of_connects_diagonally_top_to_bottom(column, last_played_row, last_player) >= 4) {
            return true;
        } else {
            return false;
        }
    },

    isColumnWithinLimit: function (column) {
        return column >= 0 && column < 7 ;
    },

    isRowWithinLimit: function (row) {
        return row >= 0 && row < 6;
    },

    number_of_connects_horizontally: function (column, last_played_row, last_player) {
        var number_of_connects = 1;

        for (var column_from_left = column - 1; this.isColumnWithinLimit(column_from_left) && column - 4 < column_from_left; column_from_left--) {
            if (this.isPlayerDiscInSpot(column_from_left, last_played_row, last_player)) {
                number_of_connects++;
            } else {
                break;
            }
        }

        for (var column_from_right = column + 1; this.isColumnWithinLimit(column_from_right) && column + 4 > column_from_right; column_from_right++) {
            if (this.isPlayerDiscInSpot(column_from_right, last_played_row, last_player)) {
                number_of_connects++;
            } else {
                break;
            }
        }
        return number_of_connects;
    } ,

    number_of_connects_vertically: function (column, last_played_row, last_player) {
        var number_of_connects = 1;
        for(var row_from_bottom = last_played_row - 1; this.isRowWithinLimit(row_from_bottom) && row_from_bottom > last_played_row - 4; row_from_bottom--) {
            if(this.isPlayerDiscInSpot(column, row_from_bottom, last_player)) {
                number_of_connects++;
            } else {
                break;
            }
        }

        return number_of_connects;
    },

    number_of_connects_diagonally_top_to_bottom: function (column, last_played_row, last_player) {
        var number_of_connects = 1;

        var column_from_left = column + 1 ;
        var row_from_top = last_played_row - 1;

        while ( this.isColumnWithinLimit(column_from_left) &&
                    this.isRowWithinLimit(row_from_top) &&
                        column_from_left < column + 4 &&
                            row_from_top > last_played_row - 4 ) {

            if(this.isPlayerDiscInSpot(column_from_left,row_from_top, last_player)) {
                number_of_connects++;
            } else {
                break;
            }

            column_from_left++;
            row_from_top--;
        }

        var column_from_right = column - 1;
        var row_from_bottom = last_played_row + 1;

        while ( this.isColumnWithinLimit(column_from_right) &&
                    this.isRowWithinLimit(row_from_bottom) &&
                        column_from_right > column - 4 &&
                            row_from_bottom < last_played_row + 4 ) {

            if(this.isPlayerDiscInSpot(column_from_right, row_from_bottom, last_player)) {
                number_of_connects++;
            } else {
                break;
            }

            column_from_right--;
            row_from_bottom++;
        }

        return number_of_connects;
    }

};


