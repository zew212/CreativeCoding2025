let myCake;

let cakes = []; // empty array to store cakes
let showFrosting = false;
let showFlames = false;
let showCandles = false;
let instructionsShown;

function setup() {
  createCanvas(windowWidth, windowHeight);

  myCake = new Cake(mouseX-145, mouseY-127.5, true,true,true);
}

// FROSTING
// whenever the mouse is clicked, the frosting switches on/off
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
  else if (key === 'b' || key === 'B') {
    this.showFrosting == fill('blue');

}
}


function draw() {
  background(0);
  // centers the cake at the mouse
  myCake.x = mouseX-40;
  myCake.y = mouseY-25;
  myCake.display(showFrosting, showFlames, showCandles);

  for(let i = 0; i < cakes.length; i++){
    cakes[i].display();
  }

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
  text("Press 'B' to change frosting to blue", 10, 80);
  text("Press 'P' to change frosting back to pink", 10, 100);
}
  
  class Cake{
    constructor(x,y, showCandles, showFrosting, showFlames){
      this.x = x;
      this.y = y;
      this.showCandles = showCandles;
      this.showFrosting = showFrosting;
      this.showFlames = showFlames;
      this.FrostingFill = random();
    } 

    display(){
      push();
      translate(this.x, this.y);
      
// CAKE
      noStroke();
      fill ('pink');
      rect(0,0,90,60);
      fill (255);
// CANDLES
      fill (255);
      stroke(1);
      if(this.showCandles){

      
      for (let i = 0; i < 7; i++){
        let cx = 10 + i * 10;
      // cx is candle x position
      // this loop draws all 7 candles, evenly spaced
        stroke(1);
        fill(255);
        rect(cx, 0, 4, -15);
      }
    }


      if (this.showFrosting) {
// BOTTOM FROSTING
      noStroke();
      fill('rgb(236,175,236)');
      for (let j = 0; j <= 9; j++) {
        circle(j * 10, 27.5, 10);
        // changes frosting to blue when 'b' is pressed
       if (key === 'b' || key === 'B') {
        this.showFrosting == fill('blue');
      }
        // changes frosting back to pink when 'p' is pressed
      else if (key === 'p' || key === 'P') {
        this.showFrosting == fill('rgb(236,175,236)');
      }
      
      }
// TOP FROSTING
      for (let k = 0; k <= 9; k++) {
        circle(k * 10, 2, 10);
      }
    }

     if (this.showFlames) {
        fill('orange');
        for (let i = 0; i < 7; i++) {
          let cx = 10 + i * 10;
          circle(cx + 2, -15, 8);
          // circle(x position of candle + half candle width, y position of top of candle, diameter of flame)
        }
      }

      pop();
    }
  }
