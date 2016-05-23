function Coordinate(x, y) {
  this.x = x;
  this.y = y;
}

Coordinate.prototype = {
  equals: function (coordinate) {
    return (coordinate.x === this.x && coordinate.y === this.y);
  },

  verticalPath: function (destinationX, destinationY) {
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
  },

  horizontalPath: function (destinationX, destinationY) {
    var y = this.y;
    var x = this.x;
    var path = [];

    if ((destinationY - y) !== 0 && destinationX === x) {
      if (destinationY > y) {
        y_step = y + 1;
        while (y_step !== destinationY) {
          path.push([destinationX, y_step]);
          y_step += 1;
        }
      } else {
        y_step = y - 1;
        while (y_step !== destinationY) {
          path.push([destinationX, y_step]);
          y_step -= 1;
        }
      }
      path.push([destinationX, destinationY]);
    }

    return path;
  },

  diagonalPath: function (destinationX, destinationY) {
    var path = [];

    this.try_bottom_left_diagonal_path(destinationX, destinationY, path);
    this.try_bottom_right_diagonal_path(destinationX, destinationY, path);
    this.try_top_left_diagonal_path(destinationX, destinationY, path);
    this.try_top_right_diagonal_path(destinationX, destinationY, path);

    return path
  },

  try_bottom_left_diagonal_path: function (destinationX, destinationY, path) {
    var x = this.x;
    var y = this.y;

    var x_step = x - 1;
    var y_step = y - 1;

    var possible_path = [];

    while (destinationX <= x_step && destinationY <= y_step) {
      if (x_step === destinationX && y_step === destinationY) {
        possible_path.push([destinationX, destinationY]);
        path.push.apply(path, possible_path);
      } else {
        possible_path.push([x_step, y_step]);
      }

      x_step -= 1;
      y_step -= 1;
    }

  },

  try_bottom_right_diagonal_path: function (destinationX, destinationY, path) {
    var x = this.x;
    var y = this.y;

    var x_step = x + 1;
    var y_step = y - 1;

    var possible_path = [];

    while (destinationX >= x_step && destinationY <= y_step) {
      if (x_step === destinationX && y_step === destinationY) {
        possible_path.push([destinationX, destinationY]);
        path.push.apply(path, possible_path);
      } else {
        possible_path.push([x_step, y_step]);
      }

      x_step += 1;
      y_step -= 1;
    }

  },

  try_top_left_diagonal_path: function (destinationX, destinationY, path) {
    var x = this.x;
    var y = this.y;

    var x_step = x - 1;
    var y_step = y + 1;

    var possible_path = [];

    while (destinationX <= x_step && destinationY >= y_step) {
      if (x_step === destinationX && y_step === destinationY) {
        possible_path.push([destinationX, destinationY]);
        path.push.apply(path, possible_path);
      } else {
        possible_path.push([x_step, y_step]);
      }

      x_step -= 1;
      y_step += 1;
    }

  },

  try_top_right_diagonal_path: function (destinationX, destinationY, path) {
    var x = this.x;
    var y = this.y;

    var x_step = x + 1;
    var y_step = y + 1;

    var possible_path = [];

    while (destinationX >= x_step && destinationY >= y_step) {
      if (x_step === destinationX && y_step === destinationY) {
        possible_path.push([destinationX, destinationY]);
        path.push.apply(path, possible_path);
      } else {
        possible_path.push([x_step, y_step]);
      }

      x_step += 1;
      y_step += 1;
    }

  }
};