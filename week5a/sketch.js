let circleX = 0;
let circleY = 0;
let circleD=25;
let thetaX=0; //theta is magnatude of rotation around a circle
let radiusX=100
// X axis



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  circleX= width/2;
  circleY=height/2;

}

function draw() {
  background(0);

  circleX = width/4 + cos(radians(thetaX))*radiusX;
  // cos() takes angle and produces number between -1 and 1 
  // according to an angle
  thetaX++
  // ++ adds 1 to existing variable


  translate(circleX,circleY);
  // (width/2, height/2) doesn't work for me for some reason
  circle(circleX,0,25);

}
