let myCake;
let diameter = 80;
let showFrosting = false;
let showFlames = false;
let instructionsShown;

function setup() {
  createCanvas(windowWidth, windowHeight);

  myCake = new Cake(mouseX-145, mouseY-127.5, diameter);
}


function mousePressed() {
  showFrosting = !showFrosting; 
}

function keyPressed() {
  showFlames = true;
}

function keyReleased() {
  showFlames = false;
}

function draw() {
  background(0);
  myCake.x = mouseX-40;
  myCake.y = mouseY-25;
  myCake.display(showFrosting, showFlames);

  textInstructions();


}

  function textInstructions() {
  fill(255);
  textSize(16);
  textAlign(LEFT);
  text("Click to frost the cake", 10, 20);
  text("Press any key to light the candles", 10, 40);
}
  
  class Cake{
    constructor(x,y, diameter){
      this.x = x;
      this.y = y;
      this.diameter = diameter;
    }

    display(showFrosting, showFlames){
      push();
      translate(this.x, this.y);
      
      // cake
      noStroke();
      fill ('pink');
      rect(0,0,90,60);
      fill (255);
      // candles
      fill (255);
      stroke(1)
      for (let i = 0; i < 7; i++){
        let cx = 10 + i * 10;
      // cx is candle x position
      // this loop draws all 7 candles, evenly spaced
      stroke(1);
      fill(255);
      rect(cx, 0, 4, -15);
      }

      if (showFrosting){
              // bottom frosting (10 circles)
      noStroke();
      fill('rgb(236,175,236)');
      for (let j = 0; j <= 9; j++) {
        circle(j * 10, 27.5, 10);
      }
      // top frosting (10 circles)
      for (let k = 0; k <= 9; k++) {
        circle(k * 10, 2, 10);
      }
    }

    if (showFlames) {
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