let pX = 0; // these are my previous points
let pY = 0; 
let targetX = 0; // these are my destination points
let targetY = 0;
let currentX = 0; // these are my current points
let currentY = 0;
let lerpAmt = 0; // how much should I move fromorigin to destination
// lerp is a way to move things smoothly
let speed = 0.01;

let prevSecond = 0;
// variable to store the previous draw loop

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  currentX = lerp(pX, targetX, 0.5);
  currentY = lerp(pY, targetY, lerpAmt);
  circle(currentX,currentY, 20);
  lerpAmt = lerpAmt+speed;
  lerpAmt = constrain(lerpAmt, 0, 1);
  // constrain keeps a value between a certain range
  // it takes three perameters: the value, low limit, the high limit

  if (prevSecond!= second()){
    console.log("do something");
    prevSecond = second();
    targetX = random(width);
    targetY = random(height);
    lerpAmt = 0;
     pX = currentX;
    pY = currentY;
    // reset lerp amount to 0 so it starts over

  }

  }

//  console.log(millis);
// uses milliseconds to track time since the program started
// prevMills; stores previous milliseconds value
// millis() shows currents time that has elapsed 
// prevMillis () stores time it was last loop 

