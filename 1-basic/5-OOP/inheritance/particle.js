class Particle {
  constructor(x, y, square) {
    this.x = x;
    this.y = y;
    this.isSquare = square;
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(225);
    strokeWeight(24);
    if(this.isSquare) {
      square(this.x, this.y, 10)
    } else {

      point(this.x, this.y);
    }
  }
}
