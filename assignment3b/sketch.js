let secondBugs = [];
let minuteBugs = [];
let hourBugs = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;

  for (let i = 0; i<60; i++){
    let x = random (width);
    let y = random (height);
    secondBugs [i] = new Bug (x,y, "bug1");
  }

  for (let i = 0; i<60; i++){
    let x = random (width);
    let y = random (height);
    minuteBugs [i] = new Bug (x,y, "bug2");
  }

  for (let i = 0; i<24; i++){
    let x = random (width);
    let y = random (height);
    hourBugs [i] = new Bug (x,y, "bug3");
  }
}

function draw() {
  background(255);
  textSize(20);
  text( hour() + " : " + minute() + " : " + second(), 15, 30);
  // how to make text bigger?

  
  for(let i = 0; i<second();i++){
    secondBugs[i].move();
    secondBugs[i].display();
  }

  for (let i = 0; i<minute(); i++){
    minuteBugs[i].move();
    minuteBugs[i].display();
  }

  for (let i = 0; i<hour(); i++){
    hourBugs[i].move();
    hourBugs[i].display();
  }
}


// Bug class
class Bug {
  constructor(x,y, type){
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.type = random (["bug1" , "bug2"]);
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

  display(){
    push();
    translate (this.x, this.y);
    fill(20);
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
    pop();
  }
}
}