let cake = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function keyPressed(){
  let type;
  if (key == 'a'){
    type == 'flames';
  } else if (key == 'b'){
    type == 'frosting2';
  }
}


function draw() {
  background(0);
      push();
      translate(mouseX-145, mouseY-127.5);
      // cake
  noStroke();
  fill ('pink');
  rect(100,100,90,60);
  fill (255);
  // candles
  stroke(1)
  rect(110,100, 4,-15);
  rect(120,100, 4,-15);
  rect(130,100, 4,-15);
  rect(140,100, 4,-15);
  rect(150,100, 4,-15);
  rect(160,100, 4,-15);
  rect(170,100, 4,-15);
  // bottom frosting
  noStroke();
  fill('rgb(236,175,236)');
  circle(100,155,10);
  circle(110,155,10);
  circle(120,155,10);
  circle(130,155,10);
  circle(140,155,10);
  circle(150,155,10);
  circle(160,155,10);
  circle(170,155,10);
  circle(180,155,10);
  circle(190,155,10);
  // top frosting
  fill('rgb(236,175,236)');
  circle(100,102,10);
  circle(110,102,10);
  circle(120,102,10);
  circle(130,102,10);
  circle(140,102,10);
  circle(150,102,10);
  circle(160,102,10);
  circle(170,102,10);
  circle(180,102,10);
  circle(190,102,10);
  
  
  // how to incorperate flames

}




