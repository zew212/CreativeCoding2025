function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("lightblue")

  for(let y=50; y<height-50; y+=100){
    // x<width means "as long as x is less than the width of the screen
    // sets up loop
    // let : defines the variable
    // aligned so the top of the circle just barely touches the top

    for(let x=50; x<width-50; x+=100){
      // loop

   
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
      // learned through https://p5js.org/reference/p5/random/

      pop();


      fill('gold')
      circle(mouseX,mouseY,60-mouseY)
      // circle changes size based on X value



    }
}
}