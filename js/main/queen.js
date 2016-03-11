function Queen(team) {
  ChessPiece.call(this, arguments);
  this.name = 'queen';
}

Queen.prototype = new ChessPiece();

Queen.prototype.validMove = function (destinationX, destinationY) {
  var path_to_destination = this.path(destinationX, destinationY);

  var baseRuleValid = ChessPiece.prototype.validMove.call(this,destinationX, destinationY );

  return baseRuleValid && path_to_destination.length > 0;
};

Queen.prototype.path = function (destinationX, destinationY) {

  var x = this.coordinate.x;
  var y = this.coordinate.y;

  var path = [];
  if ((destinationX - x) !== 0 && destinationY === y) {
    this.vertical_path(destinationX, destinationY, path);
  } else if ((destinationY - y) !== 0 && destinationX === x) {
    this.horizontal_path(destinationX, destinationY, path);
  } else {
    this.diagonal_path(destinationX, destinationY, path);
  }
  return path;
};

Queen.prototype.vertical_path = function (destinationX, destinationY, path) {
  var x = this.coordinate.x;

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
};

Queen.prototype.horizontal_path = function (destinationX, destinationY, path) {
  var y = this.coordinate.y;

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
};

Queen.prototype.diagonal_path = function (destinationX, destinationY, path) {
  this.try_bottom_left_diagonal_path(destinationX, destinationY, path);
  this.try_bottom_right_diagonal_path(destinationX, destinationY, path);
  this.try_top_left_diagonal_path(destinationX, destinationY, path);
  this.try_top_right_diagonal_path(destinationX, destinationY, path);

};

Queen.prototype.try_bottom_left_diagonal_path = function (destinationX, destinationY, path) {
  var x = this.coordinate.x;
  var y = this.coordinate.y;

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

};

Queen.prototype.try_bottom_right_diagonal_path = function (destinationX, destinationY, path) {
  var x = this.coordinate.x;
  var y = this.coordinate.y;

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

};

Queen.prototype.try_top_left_diagonal_path = function (destinationX, destinationY, path) {
  var x = this.coordinate.x;
  var y = this.coordinate.y;

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

};

Queen.prototype.try_top_right_diagonal_path = function (destinationX, destinationY, path) {
  var x = this.coordinate.x;
  var y = this.coordinate.y;

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

};