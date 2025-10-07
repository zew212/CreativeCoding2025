let antbutt = 12;
let antbody = 6;
let anthead = 9;
let antenilength = 12;
let anteniwidth = 0.3;
let ant_posX = 200
let ant_posY = 400

let Ant_speed = 0.3
// ant body part varibles
// using the ant's butt to relate other elements

let startMinute;
let lastMinute;
let maxAnts = 60; // one for each minute in the hour

let Ants = [];
let numAnts =  // change later to add 1 ant per minute that passes 

// var timer;
// var counter = 0;
// var interval;
// var button;


// let ant_pos = [pos_x, pos_y] define ant position as a global variable

function setup() {
  createCanvas(windowWidth, windowHeight);
  startMinute = min ();
  lastMinute = startMinute; // creating loop

  for (let i = 0; i < numAnts; i++){

    Ants.push({
      pos: createVector(random(width), random(height)),
      // positioning
      angle: random(TWO_PI),
      // random starting position
      speed: 2
      // how fast it goes
      });
      lastMinute = currentMinute;

  }
    // button = createButton('speed up');
    //button.mouseIsPressed(startTimer);;
    // interval = setInterval(timeIt,3600000);
  }

// function timeIt(){
   // timer.html(counter)
   // counter++; 

    
  // }

// function startTimer() {
  // interval = setInterval(timeIt,3600000);

// }

function draw() {

  background(240,240,235);

  let currentMinute = minute ();
  let elapsed = (currentMinute - startMinute + 60) % 60 // loop from 50 tp 0

  if (currentMinute !== lastMinute && Ants.length < maxAnts && elapsed <60){
    Ants.push({
      pos: createVector(random(width), random(height)),
      angle: random(TWO_PI),
      speed: 2
    });
    lastMinute = currentMinute;
  }

 
   for (let Ant of Ants) {
  
   // Ants.show()
   // Ants.move()
   Ant.angle += random(-0.1,0.1); // angle randomness
   let velocity = p5.Vector.fromAngle(Ant.angle);
    velocity.mult(Ant.speed);
    console.log(velocity);
    Ant.pos.add(velocity);
    
    push();
    translate(Ant.pos.x,Ant.pos.y);
    rotate(Ant.angle);
    console.log(Ant.angle);
  
    fill(20);
    circle(0,0,12,8);
    circle(8,0,7,7);
    circle(16,0,10,6);
    rect(20,2,8,0.3);
    rect(20,-3,8,0.3);
    // (x,y,width,height)
    // change antenas to lines to create angles


     //circle(ant_posX-15,ant_posY,anthead);
   // rect(173,401,antenilength,anteniwidth);
    //rect(173,398,antenilength,anteniwidth);

   

    pop();
    } 
  
  }
