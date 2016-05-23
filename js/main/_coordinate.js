function Coordinate(x, y) {
  this.x = x;
  this.y = y;
}

Coordinate.prototype = {
  equals: function (coordinate) {
    return (coordinate.x === this.x && coordinate.y === this.y);
  },

  verticalPath: function(destinationX, destinationY) {
    var x = this.x;
    var y = this.y;
    var path = [];

    if ((destinationX - x) !== 0 && destinationY === y) {
      if (destinationX > x) {
        x_step = x + 1;
        while (x_step !== destinationX) {
          path.push([x_step, destinationY]);
          x_step += 1;
        }
      } else {
        x_step = x - 1;
        while (x_step !== destinationX) {
          path.push([x_step, destinationY]);
          x_step -= 1;
        }
      }

      path.push([destinationX, destinationY]);
    }

    return path;
  }
};