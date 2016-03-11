function Coordinate(x, y) {
  this.x = x;
  this.y = y;
}

Coordinate.prototype = {
  equals: function (coordinate) {
    return (coordinate.x === this.x && coordinate.y === this.y);
  }
};