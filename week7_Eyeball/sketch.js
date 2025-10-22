let eye1;
let eye2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);

  eye1 = new EyeBall(200,200,100,150, 0, 100);
  eye2 = new EyeBall(100,200,100,150, 50, 5000);

  // to make the eyes look in the same direction, use the same numbers for R and T

}

function draw() {
  background(0);
  eye1.display();
  eye2.display();

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


