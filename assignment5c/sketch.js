
let circleX, circleY;
let circleDiameter = 10;
let thetaX = 0;
let thetaY = 0;
let radiusX = 90;
let radiusY = 20;
// the above variables are made around the size of the cauldron

let speedX = 3;
let speedY = 3;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(255);
  // made a window thing so the black background goes...
  //... with the other sketches but this one is still visible because of the white box

// CAULDRON
  stroke(0);
  fill(100);
  ellipse(200,300,180,150);
  ellipse(200,255,200,50);
  ellipse(200,250,200,50);
  fill('rgba(12, 72, 35, 1)');
  ellipse(200,250,190,45);

// BUBBLE
  fill(100);
	circleX = width/2 + cos(radians(thetaX))*radiusX; 
	circleY = 250 + sin(radians(thetaY))*radiusY;

  noStroke();
  fill('rgba(122, 147, 110, 1)');
	circle(circleX,circleY, circleDiameter);
	thetaX+=speedX;
	thetaY+=speedY;

  // STIRRING STICK
  fill('rgba(78, 27, 27, 1)');
  // x position chnages but Y stays the same
  rect(circleX,150,5,100);

}
