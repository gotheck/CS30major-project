//cap stone project number 2 //
let myTarget;
let theTargets = [];
let x, y , radius, xTime, yTime;


function setup() {
  createCanvas(windowWidth, windowHeight);
  theTargets.push(myTarget);
}

function draw() {
  background(0);
  for (let i=0; i<theTargets.length; i++) {
    for (let j=0; j<theTargets.length; j++) {
      {
        theTargets[i].display();
}

 function mousePressed() {
//   let myTarget = new Target(mouseX, mouseY); 
//   theTargets.push(myTarget);
// }

    class Target {
      constructor(x, y) {
        this.x = random(width);
        this.y = random(height);
        this.radius = random(25, 40);
        this.xTime = 0.9;
        this.yTime = 0.0;
        
      }

      display() {
        noStroke();
        this.x = noise(xTime)* width;
        this.y = noise(yTime)* height;
        circle(mouseX, mouseY, radius*2);
        xTime += 0.01;
        yTime += 0.01; 
    }
  }
}
}
