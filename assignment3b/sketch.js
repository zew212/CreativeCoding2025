let secondBugs = [];
let minuteBugs = [];
let hourBugs = [];
let numBugs;
let lastSecond = -1;
let lastMinute = -1;
let lastHour = -1;


function setup() {
	createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;

// INITIAL BUGS
// makes the number of bugs equal to the current time
  for (let i = 0; i<second(); i++){
    let x = random (width);
    let y = random (height);
    secondBugs [i] = new Bug (x,y, "bug1");
  }

  for (let i = 0; i<minute(); i++){
    let x = random (width);
    let y = random (height);
    minuteBugs [i] = new Bug (x,y, "bug2");
  }

  for (let i = 0; i<hour(); i++){
    let x = random (width);
    let y = random (height);
    hourBugs [i] = new Bug (x,y, "bug3");
  }
}

function draw() {
  background(255);
// TIMER
// shows the current time
  textSize(20);
  text( hour() + " : " + minute() + " : " + second(), 15, 30);

// NEW BUGS
// adds a new bug every second, minute and hour based on the type of bug
  if  (second() != lastSecond) {
    // != means "is not equal to"
    secondBugs.push (new Bug(random(width), random(height), "bug1"));
    lastSecond = second();
  }

  if (minute() !== lastMinute) {
    minuteBugs.push (new Bug(random(width), random(height), "bug2"));
    lastMinute = minute();
  }

  if (hour() !== lastHour) {
    hourBugs.push (new Bug(random(width), random(height), "bug3"));
    lastHour = hour();
  }

// DISPLAY BUGS
// makes all bugs move and display
  for(let bug of secondBugs) {
    bug.move();
    bug.display();
  }

  for (let bug of minuteBugs) {
    bug.move();
    bug.display();
  }

  for (let bug of hourBugs) {
    bug.move();
    bug.display();
  }
}


// BUG CLASS
// Creates a bug with a random type, position and speed
class Bug {
  constructor(x,y, type){
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.type = type;
  }

  // makes the bug move randomly
  move(){
    if (mouseIsPressed){
      this.speed = 5;
    } else {
      this.speed = 2;
    } 
    this.x += random (-this.speed, this.speed);
    this.y += random (-this.speed, this.speed);
  }

// BUGS
  display(){
    push();
    translate (this.x, this.y);
    fill(20);

// BUG 1
    if (this.type=="bug1"){
      ellipse(0,0,12,12);
      // butt
      // elipse(x,y,width,height)
     ellipse(8,0,8,8);
      // body
      ellipse(16,0,9,9);
      // head
      rect(20,2,8,0.3);
      rect(20,-3,8,0.3);
    // antenas

// BUG 2
    } else if (this.type=="bug2"){
      ellipse(20,20,20,9);
	    circle(10,20,10);
	    rect(24,20,1,8);
	    rect(19,20,1,8);
    	rect(14,20,1,8);
    	rect(24,12,1,8);
	    rect(19,12,1,8);
	    rect(14,12,1,8);

    }
// BUG 3
    else if (this.type=="bug3"){
      ellipse(20,20,20,15);
	    rect(24,20,1,11);
	    rect(19,20,1,11);
	    rect(14,20,1,11);
	    rect(24,9,1,11);
	    rect(19,9,1,11);
	    rect(14,9,1,11);

	fill(255);
	circle(18,20,8);
  }
  pop();
}
}