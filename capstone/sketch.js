let targetArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  targetEye; {
    
  }
  // let theTarget = new Eye(width/2, height/2);
  // targetArray.push(theTarget);
}

function draw() {
  background(220);
  genEye();

  // for (let i=0; i < targetArray.length; i++) {
  //   for (let j=0; j < targetArray.length; j++) {
  //     if (i !== j) {
  //       targetArray[i].checkIfCollision(targetArray[j]);
  //     }
  //   }
  //   targetArray.display();
  // }
}


class Eye {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //next line will create targets of various sizes
    this.radius = random(30, 60);
    this.targetColors = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"];
    
    function genEye() {
   
    }
    
  }
  

//   display() {
//     noStroke();
//     for (let i=0; i<10; i++){
//       fill(this.targetColors[i]);
//       circle(width/2, height/2);
//     }
//   }
}