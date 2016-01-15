function Queen() {
    ChessPiece.call(this);
}

Queen.prototype = new ChessPiece();

Queen.prototype.validMove = function (destinationX, destinationY) {
    return [];
};

Queen.prototype.path = function (destinationX, destinationY) {

    path = [];
    if ((destinationX - this.x) !== 0 && destinationY === this.y) {
        this.vertical_path(destinationX, destinationY)
    } else if ((destinationY - this.y) !== 0 && destinationX === this.x) {
        this.horizontal_path(destinationX, destinationY)
    }
    return path;
};

Queen.prototype.vertical_path = function (destinationX, destinationY) {
    if (destinationX > this.x) {
        x_step = this.x + 1;
        while(x_step !== destinationX){
            path.push([x_step, destinationY]);
            x_step += 1;
        }
    } else {
        x_step = this.x - 1;
        while(x_step !== destinationX){
            path.push([x_step, destinationY]);
            x_step -= 1;
        }
    }
};


Queen.prototype.horizontal_path = function (destinationX, destinationY) {
    if (destinationY > this.y) {
        y_step = this.y + 1;
        while(y_step !== destinationY){
            path.push([destinationX, y_step]);
            y_step += 1;
        }
    } else {
        y_step = this.y - 1;
        while(y_step !== destinationY){
            path.push([destinationX, y_step]);
            y_step -= 1;
        }
    }
};