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

// SPEED UP BUTTON
// This button, iof pressed, will speed up the timer by one minute
function speedUpTimer() {
  virtualMinute++;
  if (virtualMinute >= 60) {
    virtualMinute = 0;
    virtualHour++;
    // ++; means add one
    if (virtualHour >= 24) 
      virtualHour = 0;
  }
    virtualSecond = 0;
  
  if (Ants.length < maxAnts) {
    Ants.push({
      pos: createVector(random(width), random(height)),
      angle: random(TWO_PI),
      speed: 2,
      size: random(5, 15)
    });
  }
    }

// ANTS
// this is the main part and makes the ants move around randomly and adds...
// ... a new ant every minute (resets each hour)
function draw() {

  background(255);

  let currentMinute = minute ();
  // gets the current minute from my computer clock
    let currentHour = hour();
  let elapsed = (currentMinute - startMinute + 60) % 60 // loop from 50 tp 0
  // calculates how many minutes have passed since the start
  // +60 %60 makes it loop back to 0 after 59

  if (currentHour !== startHour) {
    // !== means "not equal to"
    // checks if the hour has changed
    numAnts = currentMinute;
    // resets the number of ants to the current minute
    startHour = currentHour;
    startMinute = minute();
    lastMinute = startMinute;
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

  if (currentMinute !== lastMinute && Ants.length < maxAnts && elapsed <60){
    // checks if a new minute has started and if we haven't reached the max number of ants
    Ants.push({
      pos: createVector(random(width), random(height)),
      angle: random(TWO_PI),
      speed: 2
      // adds a new ant with random position and angle
    });
    lastMinute = currentMinute;
    // makes sure we only add one ant per minute

  }

   for (let Ant of Ants) {
    // loop through each ant
   Ant.angle += random(-0.1,0.1); 
   // angle randomness
   let velocity = p5.Vector.fromAngle(Ant.angle);
   // p5.Vector.fromAngle creates a vector from an angle
    velocity.mult(Ant.speed);
    Ant.pos.add(velocity);

    if(Ant.pos.x < 0 || Ant.pos.x > width) {
      Ant.angle = PI - Ant.angle;
      // || means "or"
      // bounce off left and right edges
      Ant.pos.x = constrain(Ant.pos.x, 0, width);
      // constrain keeps it within the canvas
    }
    if (Ant.pos.y < 0 || Ant.pos.y > height) {
      Ant.angle = -Ant.angle;
      // bounce off top and bottom edges
      Ant.pos.y = constrain(Ant.pos.y, 0, height);
      // constrain keeps it within the canvas
  
    }

    
// DRAWS THE ACTUAL ANT(S)
// This part makes the ants' body parts 
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
    // antenas
    // I need to change antenas to lines to create angles

    pop();
    } 

// TIMER
// This part makes the timer and shows hour, minute, second
// It should be be constantly updating, but having a hard time with that right now
// I also can't figure out how to make it show up at the same time as the ants...
// ... (I've moved it to different parts of the code but it still doesn't work)
// I also want to make it so that when the speed up button is pressed...
// ... the timer speeds up until the button is pressed again but haven't figured that out yet
  function draw(){
  let h = hour();
  let m = minute();
  let s = second();
  let timeString = (virtualHour) + ':' + (virtualMinute) + ':' + (virtualSecond);
  // string lets me do multiple types of things in one line (variables)
  textSize(32);
  fill(0);
  text(timeString, 10, 30);
  }
  }








  // FOR NEXT TIME
  // need to make it so that when the speed up timer ... 
  // ... is pressed and the hour changes, it...
  // ... still goes back to one ant per minute