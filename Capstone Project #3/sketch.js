//cap stone project number 2 //
let myTarget;
let myTarget2;
let theTargets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let myTarget2 = new Thing(width/2, height/2);
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
class Thing {
  constructor(mapX, mapY, x, y, canvas) {
    this.x = x;
    this.y = y;	
    this.mapX = mapX;
    this.mapY = mapY;
    this.height = 50;
    this.width = 50;
    this.direction = Math.floor(Math.random()*359);
    this.speed = Math.floor(Math.random()*50) + 5;
    this.erratic = Math.floor(Math.random()* 4) + 1 === 1;
    this.gravitationalPull = 0;
    this.canvas = canvas;
    this.tick = 0;
    this.changeAt = Math.floor(Math.random()*50) + 1;
    this.correctXY();
    this.hit = false;
  }
  display() {
    Thing.prototype.draw = function(ctx, sprite) {
    
      if(this.hit === false) {
    
        ctx.drawImage(sprite, this.getMapX(), this.getMapY(),
          90, 90, 
          this.getX(), this.getY(), 
          this.getWidth(), this.getHeight());
      }
      
      return this;
    };
  }
}
