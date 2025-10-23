// lerp (origin point, destination, %)

let eye1;

let eye2x = 0;
let eye2y = 0;

let pX = 0; // previous position
let pY = 0;

let targetX = 0; // target position
let targetY = 0;

let currentX = 0; // current position
let currentY = 0;

let lerpAmount = 1; // how far into our lerp we are
let speed = 0.05; // how fast we move

let prevS = 0; // stores previous second for timer


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB); 

  eye1 = new EyeBall(200,200,100,150, 0, 100);

}

function draw() {
  background(0);
  // set current position accounding to lerp functions
  currentX = lerp(pX, targetX, lerpAmount);
  currentY = lerp(pY, targetY, lerpAmount);

  eye1.x = currentX;
  eye1.y = currentY;
  eye1.display();


//  lerpAmount = map(mouseX, 0, width, 0, 1);

  // every frame, incremendts from 0 to 1
  lerpAmount = lerpAmount + speed;
  lerpAmount = constrain(lerpAmount, 0, 1); // so it doesn't go beyond the destination

  // if (second() != prevS)
  //  prevS = second(); // update prevS every second
  //  pX = currentX;
  //  pY = currentY;
  //  targetX = random(width);
  //  targetY = random(height);
  //  lerpAmount = 0;
}

function mousePressed() {
  pX = currentX;
  pY = currentY;
  targetX = mouseX;
  targetY = mouseY;
  lerpAmount = 0;
}

class EyeBall {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y; 

    this.w = w; // width 
    this.h = h; // height

    this.speed = 0.005;
    this.noiseR = 50;
    // noise R makes the radius change over time
    this.noiseT = random()*1000;
    // noise T makes the angle change over time
}

display () {
  push();

  translate(this.x, this.y);
  // how to use 'this' for global variables that refer to object, not local

  // draw eyeball
  fill(255);
  ellipse(0, 0, this.w, this.h);

  let eyeTheta = noise(this.noiseT) * 360; // theta angle based on noise
  let eyeXRadius = noise(this.noiseR) * this.w/2;
  let eyeYRadius = noise(this.noiseR) * this.h/2; // offset noise for y radius

  let eyeX = cos(eyeTheta) * eyeXRadius;
  let eyeY = sin(eyeTheta) * eyeYRadius;

  let eyeWidth = this.w;
  let eyeHeight = this.h;


  // draw pupil
  fill (0);
  ellipse(eyeX, eyeY, eyeWidth/2, eyeHeight/2);
  fill (255);

  this.noiseR = this.noiseR + this.speed;
  this.noiseT = this.noiseT + this.speed;

  pop();

}
}


