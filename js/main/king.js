function King() {
    ChessPiece.call(this);
}

King.prototype = new ChessPiece();

King.prototype = {
    validMove : function(destination_row, destination_column) {
        var rowDifference = Math.abs(this.row - destination_row);
        var columnDifference = Math.abs(this.column - destination_column);
        return ( rowDifference === 1) || (columnDifference === 1) ;
    }
};