let bouncingBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  addBalls();
}

function draw() {
  background(200);
  for (ball of bouncingBalls) {
    fill(ball.color);
    ball.y += ball.dy;
    ball.dy += 0.25;
    circle(ball.x, ball.y, 50); 
    
    if (ball.y >= height && ball.dy > 0) {
      ball.dy = -0.95 * ball.dy;
    }

     ball.x += ball.dx;
    if (ball.x >= width || ball.x <= 0) {
      ball.dx = -1 * ball.dx;
    }
  } 
  addMoreBalls();
}

function addBalls() {
 for(i = 0; i < 2; i++) {
  balls = {
    x: random(width),
    y: random(50),
    dy: 0,
    dx: (1, -1, random(-5, 5)),
    color: color(random(['red', 'blue', 'yellow', 'green', 'purple', 'orange'])),
  };
  bouncingBalls.push(balls);
  }
}

function addMoreBalls() {
  if (mouseIsPressed) {
    addBalls();
  }
}