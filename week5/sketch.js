let buttonX=100;
let buttonY=100;
let buttonD=80;
let hovering= false;
// boolean variable that tracks whether the mouse is 
// hovering over my button

let r = 0; // variable to hold red amount
let g = 0; // variable to hold green amount
let b = 0; // variable to hold blue amount

// global variables



function setup() {
  createCanvas(windowWidth, windowHeight);
  // if the background is in
  // the draw loop, it will be refreshed 
  // (use this if you want to create a paint effect)
}

function draw() {



  background(r,g,b)
  strokeWeight(1)// resests strokeweight to 1
  fill(0,255,0); // green fill
  text("x:" + mouseX + "y:" + mouseY, 15,15)
  let distance = dist(mouseX,mouseY, buttonX, buttonY)
  // dist: x-coordinate of the first point
  // Calculates the distance between two points, in either two or three dimensions.
  text("dist:"+distance,15,30);

  stroke(255); // white stroke
  noFill();

  

  if(distance<buttonD){
  // IS the distance between the mouse and the center
  // LESS THAN the radius?
  fill(50);
  hovering=true;
  // when button is over circle, fills with the new color

    if (hovering==true){ // flipped hovering variable

    if(mouseIsPressed){
      strokeWeight(3); // makes the stroke wider when pressed (in circle)

    }
  }
  }
  circle(buttonX,buttonY,buttonD);

  fill("red");
  noStroke(0);
  circle(0,200,25);

}

function mousePressed(){ 
  // the mousePressd function runs enclosed code 
  // ONCE when the mouse is pressed down
  
  r = random (255); 
  g = random (255);
  b = random (255);
  
}