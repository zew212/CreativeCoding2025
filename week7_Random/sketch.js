let points = []; // empty array for coordinates
let lineStart = 0;
let lineEnd = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  points = [
    createVector(0, 0),
    createVector(0, -100),
    createVector(85, 50),
    createVector(-85, 50),
    createVector(0, 100),
    createVector(-85, -50),
    createVector(85, -50)
  ];
  
}
 
function draw() {
  background(0);
  translate (width/2, height/2);
  stroke(255);
  strokeWeight(5);
  for (let i = 0; i < points.length; i++) {
    point(points[i].x, points[i].y);
  }

  stroke(255,0,0);
  line(points[lineStart].x, points[lineStart].y, points[lineEnd].x, points[lineEnd].y);
  // using different line points from the array to draw a line

  let lineAmount = floor(random(1,9));
  // floor generates random integers
  // lineAmount decides how many lines are drawn per frame
  for (let i = 0; i < lineAmount; i++) {
    let start = floor(random(points.length));
    let end = floor(random(points.length));
  }
  
}

function mousePressed() {
  lineStart = floor(random(points.length));
  lineEnd = floor(random(points.length));
  // points.length means the total number of points in the array
  // floor function will round down to nearest whole number
}
