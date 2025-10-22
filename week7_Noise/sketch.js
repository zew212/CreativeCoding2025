let noisePosition = 0;
let noiseSpeed = 0.01;
let startingPoint = 0;
let noiseTheta = 0;
let noiseRadius = 0;
let noisePositionAngle = 1000; // setting different starting point for other number

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  
}

function draw() {
  translate(width/2, height/2);

  strokeWeight(5);
  point (0,0);

  noiseTheta= map(noise(noisePositionAngle), 0, 1, -360, 360);
  noiseRadius = map(noise(noisePosition), 0, 1, 0, width/2);

  let x = cos(noiseTheta) * noiseRadius;
  let y = sin(noiseTheta) * noiseRadius;

  // background(noiseTheta, 100, noiseRadius);
  // makes the background change color and hue based on position

  point(0, 0);
  stroke(noiseTheta, 100, noiseRadius);
  line(0, 0, x, y);
  circle(x, y, 10);

  noisePosition = noisePosition + noiseSpeed;
  noisePositionAngle += noiseSpeed;
  // can also say noisePosition += noiseSpeed;


  // noise isn't a range, it's a position
  // noise is different from random it doesn't jump around
  // produces fixed flow of numbers
  // translate(width/2, height/2);
  // circleD = noise(noisePosition)* width;
  // millis is nice because it doesn't reset every frame
  // circle (0, 0, circleD);
  
  // noisePosition = startingPoint;

  // for (let i = 0; i < width; i++){
    // let y = noise(noisePosition)*height;
   // noisePosition = noisePosition + noiseSpeed;
    // let d = map(i, 0, width, 0, 25);
   // circle(i, y, d);

  // }
//  startingPoint = startingPoint + noiseSpeed;
  
}
