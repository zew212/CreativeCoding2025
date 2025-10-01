

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("lightblue")

  for(let y=50; y<height-50; y+=100){
  // x<width means "as long as x is less than the width of the screen"
  // 100 is the distance between each circle
  // iteration operators:
  // i++ adds 1 to i
  // i-- subtracts 1 from i
  // i+=2 adds 2 to i
  // i-=2 subtracts 2 from i
  for(let x=50; x<width-50; x+=100){
      // why isn't it repeating down the screen?
      // because we need a second loop!

    push();
    translate(x,50);
    // everything within this push/pop is centered in the middle of the screen
    // with 0,0 as the center point
      let rotation = map (y,0,height-50,0,PI);
      // map(value to map, min of value, max of value, min of output, max of output)
      // map= a function that takes a value and converts it to a different range
      rotate(rotation);
      // everything within this push/pop is rotated based on the y position

      strokeWeight(1);
      fill("lightpink");
      circle(0,0,100);
      circle(-15,-10,10);
      circle(15,-10,10);

    let happiness;
    happiness= map(x,0,width,-25,25);

    noFill();
    arc(0,0,60,60,radians(0-happiness),radians(180+happiness));

    pop();
    }
  }

  

}
