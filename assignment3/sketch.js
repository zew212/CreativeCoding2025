let Ant_speed = 0.3
let startMinute;
let lastMinute;
let Ants = [];
let startHour; 
let numAnts;
// number of ants variable
let maxAnts = 60; 
// makes sure the number of ants doesn't exceed 60
let speedButton;
let virtualHour, virtualMinute, virtualSecond;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let currentMinute = minute();
  // gets the current minute from my computer clock
  numAnts = currentMinute;
  // sets the initial number of ants to the current minute
  startMinute = currentMinute;
  // records the starting minute
  startHour = hour();
  // records the starting hour
  lastMinute = currentMinute;
  // keeps track of when the last minute change happened
  virtualHour = hour();
  virtualMinute = minute();
  virtualSecond = second();


  Ants = [];
  // resets the ants array
  for (let i = 0; i < numAnts; i++){
    // initial ants
    Ants.push({
      pos: createVector(random(width), random(height)),
      // random starting position
      angle: random(TWO_PI),
      // random angle
      speed: random(1, 3),
      // speed
      size: random(5, 15)
      });
  }
  speedButton = createButton('Speed Up Timer');
  speedButton.position(10, 40);
  speedButton.mousePressed(speedUpTimer);
  }

function speedUpTimer() {
  virtualMinute++;
  if (virtualMinute >= 60) {
    virtualMinute = 0;
    virtualHour++;
    if (virtualHour >= 24) 
      virtualHour = 0;
    // reset ants at midnight
    resetsAntsForNewHour();
} else {
    virtualSecond = 0;
    if (Ants.length < maxAnts){
      Ants.push({
        pos: createVector(random(width), random(height)),
        angle: random(TWO_PI),
        speed: 2,
        size: random(5, 15)
      });
    }
}
}

function resetsAntsForNewHour() {
  numAnts = virtualMinute;
  if (numAnts < 1) numAnts = 1;
  Ants = [];
  for (let i = 0; i < numAnts; i++) {
    Ants.push({
      pos: createVector(random(width), random(height)),
      angle: random(TWO_PI),
      speed: random(1, 3),
      size: random(5, 15)
    });
  }
}
function draw() {

  background(255);

  virtualSecond++;
  if (virtualSecond >= 60) {
    virtualSecond = 0;
    virtualMinute++;
    if (virtualMinute >= 24) virtualHour = 0;

    resetsAntsForNewHour();
  } else {
    if (Ants.length < maxAnts) {
      Ants.push({
        pos: createVector(random(width), random(height)),
        // https://p5js.org/reference/p5.Vector/fromAngle/
        angle: random(TWO_PI),
        speed: 2,
        size: random(5, 15)
      });
    }
  }

for (let Ant of Ants) {
  // loop through each ant
  Ant.angle += random(-0.1,0.1);
  let velocity = p5.Vector.fromAngle(Ant.angle);
  // p5.Vector.fromAngle creates a vector from an angle
  velocity.mult(Ant.speed);
  // mult sets the length of the vector
  Ant.pos.add(velocity);
  // adds the velocity to the position to move the ant

  if(Ant.pos.x < 0 || Ant.pos.x > width)
    Ant.angle = PI - Ant.angle;
  // || means "or"
  // bounce off left and right edges
  Ant.pos.x = constrain(Ant.pos.x, 0, width);
  // constrain keeps it within the canvas
}
  if (Ant.pos.y < 0 || Ant.pos.y > height) {
    Ant.angle = -Ant.angle;
    Ant.pos.y = constrain(Ant.pos.y, 0, height);
  }
    
    push();
    translate(Ant.pos.x,Ant.pos.y);
    rotate(Ant.angle);
  
    fill(20);
    ellipse(0,0,12,12);
    // butt
    ellipse(8,0,8,8);
    // body
    ellipse(16,0,9,9);
    // head
    rect(20,2,8,0.3);
    rect(20,-3,8,0.3);
    // (x,y, width, height)
    // change antenas to lines to create angles

    pop();
    } 

  // TIME DISPLAY
  let h = hour();
  let m = minute();
  let s = second();
  let timeString = nf(virtualHour, 2) + ':' + nf(virtualMinute, 2) + ':' + nf(virtualSecond, 2);
  // formats the time to always show two digits
  // time string is used to show the time on the canvas
  textSize(32);
  fill(0);
  text(timeString, 10, 30);
  // timestring means "hour:minute:second"

  console.log();



  // FOR NEXT TIME
  // need to make it so that when the speed up timer ... 
  // ... is pressed and the hour changes, it...
  // ... still goes back to one ant per minute