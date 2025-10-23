let myCake;

let cakes = []; // empty array to store cakes
let showFrosting = false;
let showFlames = false;
let showCandles = false;
let instructionsShown;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  myCake = new Cake (mouseX-145, mouseY-127.5, false,false,false,false);
}

// FROSTING
// whenever the mouse is clicked, a new cake is made at the position of the mouse
function mousePressed() {
  let newCake = new Cake(myCake.x, myCake.y, myCake.showCandles, myCake.showFrosting, myCake.showFlames);
  cakes.push(newCake);
}

function keyPressed() { // add functionality that changes flame / frosting on key presses
  if (key === 'c' || key === 'C') {
    myCake.showCandles = !myCake.showCandles;
  }
  else if (key === 'f' || key === 'F') {
    myCake.showFrosting = !myCake.showFrosting;
  }
  else if (key === 'l' || key === 'L') {
    myCake.showFlames = !myCake.showFlames;
  }

}

function draw() {
  background(0);
  // centers the cake at the mouse
  // I made the cake originally on open processing so the offset is a bit weird
  myCake.x = mouseX-40;
  myCake.y = mouseY-25;
  myCake.display(showFrosting, showFlames, showCandles);

  for(let i = 0; i < cakes.length; i++){

    cakes[i].display();
  }

// puts the instructions on screen
  textInstructions();
}

// INSTRUCTIONS
// shows the instructions to interact with the cake 
function textInstructions() {
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text("Click 'F' to frost the cake", 10, 20);
  text("Press 'C' to add candles", 10, 40);
  text("Press 'L' to light the flames", 10, 60);
}
  

// creates the cake class
  class Cake{
    constructor(x,y, showCandles, showFrosting, showFlames){
      // sets up the variables
      this.x = x;
      this.y = y;
      this.showCandles = showCandles;
      this.showFrosting = showFrosting;
      this.showFlames = showFlames;
    } 

    display(){
      push();
      translate(this.x, this.y);
      
// CAKE
      noStroke();
      fill ('lightpink');
      rect(0,0,90,60);
      fill (255);
// CANDLES
      fill (255);
      stroke(1);
      if(this.showCandles){

      
      for (let i = 0; i < 7; i++){
        let candleX = 10 + i * 10;
      // this loop draws all 7 candles, evenly spaced
        stroke(1);
        fill(255);
        rect(candleX, 0, 4, -15);
      }
    }


// BOTTOM FROSTING
      if (this.showFrosting) {
      noStroke();
      fill('purple');
      for (let j = 0; j <= 9; j++) {
        circle(j * 10, 56, 10);
        // this loop draws the bottom frosting
      }
 
// TOP FROSTING
      for (let k = 0; k <= 9; k++) {
        circle(k * 10, 2, 10);
      }
    }

     if (this.showFlames) {
        fill('orange');
        for (let i = 0; i < 7; i++) {
          let FlameX = 10 + i * 10;
          circle(FlameX + 2, -15, 8 + random(2));
          // circle(x position of candle + half candle width, y position of top of candle, diameter of flame)
          // adding the random function makes the flames flicker
        }
      }

      pop();
    }
  }
