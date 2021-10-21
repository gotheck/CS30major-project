//cap stone project number 2 //

let targetArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let index = 0; index<10; index++) {
    targetGen();
  }
}


function draw() {
  background(220);
  // checkIfTargetClicked();
  displayTarget();
}


function targetGen() { //targetGen === spawnBall
  let newTargets = {
    x: random(width),
    y: random(height),
    radius: random(10,30),
    ballColor: color(random (255), random (255), random (255), random (255)),
  };
  targetArray.push(newTargets);
}


function displayTarget() {
  for (let target of targetArray) {
    noStroke();
    fill(target.targetColors);
    circle(target.x, target.y, target.radius*2);
  }
}