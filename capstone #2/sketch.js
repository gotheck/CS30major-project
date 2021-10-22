//cap stone project number 2 //

let theTargets = [];
let x, y, radius, xTime, yTime;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // x = random(width);
  // y = random(height);
  // radius = random(25, 40);
  // xTime = 0.9;
  // yTime = 0.0;
}


function draw() {
  background(0);
  x = noise(xTime)* width;
  y = noise(yTime)* height;
  circle(x, y, radius*2);
  xTime += 0.01;
  yTime += 0.01;
}

class Target {
  constructor(x, y) {
    x = random(width);
    y = random(height);
    radius = random(25, 40);
    xTime = 0.9;
    yTime = 0.0;
  }
}

// function targetSpawn() {
//   theTarget.y -= theTarget.speed;
//   theTarget.x +=
// }