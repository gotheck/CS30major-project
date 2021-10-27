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
  }
}

function mousePressed() {
  let myTarget = new Target(mouseX, mouseY); 
  theTargets.push(myTarget);
}

class Target {
  constructor(x, y) {
    this.x = random(x);
    this.y = random(y);
    this.radius = random(25, 40);
    this.theColor = color(random(255), random(255), random(255), random(255));
    this.dx = random(-10,10);
    this.dy = random(-10,10);
        
  }
  display() {
    noStroke();
    fill(this.theColor);
    circle(this.x, this.y, this.radius*2);
  }
  move() {
    this.x += this.dx;
    this.y += this.dy;

    //edge check
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1;
    }
  }

}