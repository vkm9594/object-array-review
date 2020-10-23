let ball0;
let ball1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball0 = {
    x: random(width),
    y: random(50),
    dy: 0,
  }
  ball1 = {
    x: random(width),
    y: random(50),
    dy: 0,
  }
}
function draw() {
  background(200);
  ball0.y += ball0.dy;
  ball0.dy += 0.25;
  circle(ball0.x, ball0.y, 50);
  ball1.y += ball1.dy;
  ball1.dy += 0.25;
  circle(ball1.x, ball1.y, 50);
  // if the object hits the bottom of the canvas
  // make it go up instead of down
  if (ball0.y >= height && ball0.dy > 0) {
    ball0.dy = -0.95 * ball0.dy;
  }
  if (ball1.y >= height && ball0.dy > 0) {
    ball1.dy = -0.95 * ball1.dy;
  }
}