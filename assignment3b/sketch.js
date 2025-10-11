

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
	    pos: createVector(random(width), random(height)),
      // random starting position
      angle random(TWO_PI),
      // random angle
      speed random(1, 3),
      // speed
      size random(5, 15)
}