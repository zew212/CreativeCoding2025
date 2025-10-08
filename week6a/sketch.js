let drunks = []; // square brackets = array
// an array
let drunkAmount = 100;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,120,130);
  x = width/2;
  y = height/2;
  colorMode(HSB);
  // HSB = hue, saturation, brightness

  for (let i=0; i < drunkAmount; i++){ // for loop
    let drunkD = random(10,100); // diameters from 10 to 100
    let drunkSpeed = random(1,10); // speed from 1 to 10
    let drunkHue = random(80,200); // hues from 80 to 200
    // create a new Drunk object and put it in the array
    drunks[i] = new Drunk(width/2, height/2, drunkD, drunkSpeed, drunkHue);
  }
}

function draw(){

  for(let i=0; i<drunks.length; i++){
    // drunks.length gives you the number of items in the array
    drunks[i].move();
    drunks[i].drawDrunk();
  }

}

class Drunk { // class declares a new type of object
  constructor(x, y, d, speed, hue) {
    // constructor function initializes new objects
    this.x = x;
    // takes variable and makes it global to the object
    this.y = y;
    this.d = d;
    this.speed = speed;
    this.hue = hue;
    this.opacity = random(0,1); // you can initialize variables here
  }
  move(){ // you can declare functions or "methods" like this
    this.x = this.x + random(-this.speed, this.speed);
    this.y = this.y + random(-this.speed, this.speed);
  }

  drawDrunk(){
    fill(this.hue, 70, 100, this.opacity);
    noStroke()
    circle(this.x, this.y, this.d);
  }
}

// CLASS factory for objects
// OBJECT assembly of variables and functions
// THIS an object unique variable "fields"
// ARRAY is a variable that contains multiple variables..
// ... each individual variable can be accessed using an...
// ... index number that is fed into the square brackets...
// .. like so: drunks[5] would give me the 6th drunk in the list