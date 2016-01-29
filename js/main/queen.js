function Queen() {
    ChessPiece.call(this);
}

Queen.prototype = new ChessPiece();

Queen.prototype.validMove = function (destinationX, destinationY) {
    return [];
};

Queen.prototype.path = function (destinationX, destinationY) {

    var x = this.coordinate.x;
    var y = this.coordinate.y;

    var path = [];
    if ((destinationX - x) !== 0 && destinationY === y) {
        this.vertical_path(destinationX, destinationY, path)
    } else if ((destinationY - y) !== 0 && destinationX === x) {
        this.horizontal_path(destinationX, destinationY, path)
    }
    return path;
};

Queen.prototype.vertical_path = function (destinationX, destinationY, path) {
    var x = this.coordinate.x;

    if (destinationX > x) {
        x_step = x + 1;
        while(x_step !== destinationX){
            path.push([x_step, destinationY]);
            x_step += 1;
        }
    } else {
        x_step = x - 1;
        while(x_step !== destinationX){
            path.push([x_step, destinationY]);
            x_step -= 1;
        }
    }
};

Queen.prototype.horizontal_path = function (destinationX, destinationY, path) {
    var y = this.coordinate.y;

    if (destinationY > y) {
        y_step = y + 1;
        while(y_step !== destinationY){
            path.push([destinationX, y_step]);
            y_step += 1;
        }
    } else {
        y_step = y - 1;
        while(y_step !== destinationY){
            path.push([destinationX, y_step]);
            y_step -= 1;
        }
    }
};