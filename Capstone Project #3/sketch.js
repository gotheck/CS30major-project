//cap stone project number 2 //
let myTarget;
let theTargets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let myTarget = new Target(width/2, height/2);
  theTargets.push(myTarget);
}

function draw() {
  background(0);
  for (let i=0; i< theTargets.length; i++) {
    theTargets[i].move();
    theTargets[i].display();
    checkIfTouchTrue();
  }
}
function checkIfTouchTrue() {
  for (let i = theTargets.length-1; i >= 0; i--) {
    let onTarget = dist(theTargets[i].x, theTargets[i].y, mouseX, mouseY);
    if (onTarget < theTargets[i].radius) {
      theTargets.splice(i,1);
    }
  }
}
class Target {
  constructor(x, y) {
    this.x = random(x);
    this.y = random(y);
    this.radius = random(45, 55);
    this.theColor = color(random(255), random(255), random(255), random(255));
    this.dx = random(-10,10);
    this.dy = random(-10,10);
    this.xTime = random(500);
    this.yTime = random(500);
    this.timeChange = random(0.001, 0.1);
    theTargets.push();
  }

  display() {
    for (let target of theTargets) {
      noStroke();
      fill(target.theColor);
      circle(target.x, target.y, target.radius*2); 
    }
  }
  move() {
    for (let aTarget of theTargets) {
      aTarget.x = noise(aTarget.xTime) * width;
      aTarget.y = noise(aTarget.yTime) * height;
      aTarget.xTime += 0.001;
      aTarget.yTime += 0.001;
    }

    //edge check
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1;
    }
  }
}

