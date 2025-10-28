let drunkX= 200;
let drunkY= 200;
let drunkRange= 5;
let drunkDiameter= 5;

function setup() {
  createCanvas(400, 400);
  background (0);
  

// PUMPKIN
  fill ('orange');
  ellipse(200,200,250,200);
// RINGS
  noStroke();
  fill ('rgba(177, 110, 10, 0.5)');
  ellipse(200,200,200,200);
  // ellipse(x, y, width, height)
  fill ('orange');
  ellipse(200,200,150,200);
  fill ('rgba(177, 110, 10, 0.5)');
  ellipse(200,200,100,200);
  fill ('orange');
  ellipse(200,200,50,200);


// STEM
  fill ('rgba(111, 77, 53, 1)');
  beginShape();
  vertex(190,120);
  vertex(200,120);
  vertex(230,70);
  vertex(210,50);
  endShape();
// LEAF 
  fill ('green');
  beginShape();
  vertex(170,70);
  vertex(170,100);
  vertex(150,100);
  vertex(190,120);
  endShape();

}

function draw() {

  fill (0);
  drunkX = drunkX + random(-drunkRange, drunkRange);
  drunkY = drunkY + random(-drunkRange, drunkRange);
  circle(drunkX, drunkY, drunkDiameter);
}