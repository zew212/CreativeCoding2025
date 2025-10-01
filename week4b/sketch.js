function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("lightblue")

  for(let y=50; y<height-50; y+=100){

    for(let x=50; x<width-50; x+=100){

   
      push();
    translate(x,y);
    // making more layers (up and down the y axis)

      strokeWeight(1);
      fill("darkblue");
      frameRate(8);
      // frameRate(1) makes it change once per second
      // frameRate(8) makes it change 8 times per second
      circle(mouseX/8*random([windowWidth], [windowHeight]),0,100);
      // circle(x,y,diameter)
      // makes the circles go farther away when the mouse moves to the right

      pop();


      push();

      if(mouseIsPressed == true);
      



      pop();

function draw() {



  
}

    }
}
}