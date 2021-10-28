//cap stone project number 2 //
let myTarget;
let theTargets = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  // for (let index = 0; index < 10; index++) {
  //   window.setInterval(Target, 500);
  // }
  //next 2 lines will spawn a ball as soon as the program is ran.
  // let myTarget = new Target(width/2, height/2);
  // theTargets.push(myTarget);
}

function draw() {
  background(0);
  for (let i=0; i< theTargets.length; i++) {
    theTargets[i].move();
    theTargets[i].display();
  }
  checkIfTouchTrue();
}

function mousePressed() {
  let myTarget = new Target(mouseX, mouseY); 
  theTargets.push(myTarget);
}

function 

class Target {
  constructor(x, y) {
    this.x = random(x);
    this.y = random(y);
    this.radius = random(25, 40);
    this.theColor = color(random(255), random(255), random(255), random(255));
    this.dx = random(-10,10);
    this.dy = random(-10,10);
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.timeChange = random(0.001, 0.1);
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
      aTarget.xTime += 0.01;
      aTarget.yTime += 0.01;
    }
    // this.x += this.dx;
    // this.y += this.dy;

    //edge check
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1;
    }
  }

}