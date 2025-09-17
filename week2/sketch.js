

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (150,210,227); // background color (rgb)


};

function draw() {
  circle(200,200,150) ; // runs a loop after setup: 
  // x position, y position, diameter
  triangle(9,150,200,9,200,125);
  //triangle(125, 200, 9, 200, 200, 9)
  ellipse(250, 80, 10, 20)
  fill(250, 80, 10, 20);
  ellipse(250, 300, 200, 20);
  line(250, 90, 250, 290); // connecting the ellipses
  
  strokeWeight(1);
  ellipse(200, 200, 100, 20) 

};

rect(100,80,100,10);

angleMode