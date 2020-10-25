let bouncingBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  addBalls();
}

function draw() {
  background(200);
  for (ball of bouncingBalls) {
    ball.y += ball.dy;
    ball.dy += 0.25;
    circle(ball.x, ball.y, 50); 
    
    if (ball.y >= height && ball.dy > 0) {
      ball.dy = -0.95 * ball.dy;
    }
  } 
}

function addBalls() {
 for(i = 0; i < 2; i++) {
  balls = {
    x: random(width),
    y: random(50),
    dy: 0,
  };
  bouncingBalls.push(balls);
  }
}