

let circlesize = 100;
// "let" is used to declare a variable
// in the above example, we are declaring a variable named circlesize and setting it to ___
// circlesize = diameter
// = sign sets the value of the variable

// whenever you use a function that is referenced later in the code, it must be declared before any other function

function setup() {
  createCanvas(500, 500);

}

function draw() {


console.log(mouseX + ", " + mouseY);

  background("rgba(154, 217, 244, .5)");
  // a gray scale color is denoted as a number 0-255
  // 0 is black, 255 is white
  // and RGB colors are denoted as (R, G, B)
  //(255, 0, 0) is red
  // can also use color names like "red", "blue", "green", etc.
// "rgb(0,0,0)" adds a box where you can pick color from a color picker
// "rgba(0,0,0,0.5)" the last number is opacity from 0-1

noStroke();
fill("rgba(66, 143, 162, 0.5)");
rect(0, 0, width/2, height/2);
// square in the top left corner

rect(height/2, width/2, width, height);
// (x, y, width, height)
// square in the bottom right corner
// opposite of the first square

fill("rgba(163, 11, 11, 0.8)");
// fill() sets the color used to fill shapes
// can use gray scale, RGB, or color names
// the last number in "rgba" is opacity from 0-1
stroke("rgba(255, 255, 255, 1)");
// to set the weight of the stroke, use strokeWeight()
// can also do noStroke() to remove the outline 
// or strokeweight(0) to remove the outline
//or noFill() to remove the fill
strokeWeight(2);
// stroke() sets the color of the shape's outline
// can use gray scale, RGB, or color names
// the last number in "rgba" is opacity from 0-1
circle(200, 200, circlesize);
// circle(x, y, diameter)
// x and y are the coordinates of the center of the circle
// circlesize is referenced from the variable declared at the top


fill("rgba(8, 73, 158, 0.8)");
// changing the fill color
//rect(25, 250, 150, 25);

// rect(x, y, width, height)
// x and y are the coordinates of the top left corner

fill("rgba(203, 158, 8, 0.8)");
// changing the fill color again
strokeWeight(8);
//rect(225, 90, 100, 50);

// rect(x, y, width, height)

noStroke();
// removing the stroke for the triangle
fill("rgba(8, 158, 73, 0.8)");
beginShape();
vertex(300, 300); // left point
vertex(350, 350); // bottom point
vertex(400, 300); // right point
// vertex(x, y) specifies a vertex of a shape
// x and y are the coordinates of the vertex
// can have as many vertices as you want

// to draw complex shapes (more than 2 coords), use beginShape() and endShape()
// any vertex() calls must be between beginShape() and endShape()
endShape(); // adds the line to close the shape

fill("rgba(195, 4, 87, 0.2)");
stroke("rgba(195, 4, 87, .4)");
beginShape();
vertex(100, 400);
// (x, y) specifies a vertex of a shape
// left point
vertex(150, 450);
// bottom point
vertex(30, 400);
// right point
vertex(150, 350);
// top point
endShape(CLOSE); // CLOSE adds the line to close the shape

fill("rgba(0, 0, 0, 0.8)");
circle(200, 100+200, 40);
// circle(x, y, diameter)
// 100+200 makes the circle move down 200 pixels (from 100 to 300)

fill("rgba(249, 245, 245, 0.8)");
circle(width/2, height*0.75, width/8);
// width and height are the dimensions of the canvas
// width/2 is the center of the canvas horizontally
// height*0.75 is 3/4 down the canvas vertically
// width/8 is 1/8 the width of the canvas
// if you change the size of the canvas, the circle will stay in the same place relative to the canvas size


fill("lightblue");
// colors can also be specified using hex codes
// hex codes start with a # followed by 6 digits (0-9, A-F)
// the first two digits are the red value, the next two are the green value, and the last two are the blue value

//ellipse(mouseX, mouseY, 40, 40);

// mouseX and mouseY are the current coordinates of the mouse
// the ellipse will follow the mouse

// if you use mouseX and mouseY, the shape will move with the mouse and will grow and shrink based on the mouse position

fill("white");
noStroke();
ellipse(width/2,height*.2,100,100,radians(30),radians(330), PIE);
// ellipse(x, y, width, height, start, stop)
// PI is a constant in p5.js that represents the value of pi (3.14159...)
// radians are used to measure angles


}