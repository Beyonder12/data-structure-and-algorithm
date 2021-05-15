function setup() {
  createCanvas(600, 600);
  p = new Particle(300, 300, true);
}

function draw() {
  background(0);
  p.update();
  p.show();
}
