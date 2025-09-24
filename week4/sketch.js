

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  
background("blue")


circle (100,100,100);
//(x,y,diameter)
circle (85,90,40);
circle (200,90,40);
arc(100,120,30,30,0,PI);
//arc(x position, y position, width, height, start angle, stop angle)
arc(100,50,100,100,PI);


push();

rotate(radians(mouseX));
// rotates line in left top corner
stroke("white");
strokeWeight(4);
line(0,0,300,0);
// line(x1,y1,x2,y2)
pop();

push();
// anything between push and pop will be affected by the translate

// if(condition)
if(mouseX>width/2 && mouseY>height/2){ // if the test inside the () is met..
  // ... run this code
  fill("brown");

} else if(mouseIsPressed == true){
  fill("lightblue");
  // 

  } else { // if the test is NOT met...
    // run this code instead
    fill("pink");
  }
// > : greater than
// < : less than
// >= : greater than or equal to
// <= : less than or equal to
// == : is equal to
// != : is not equal to
// && : and (for combining multiple conditions)
// || : or (for combining multiple conditions)

if(mouseX>width/2){ // else if (a different test is met)...
fill("green");
}


//fill("pink");
// stroke("red");
translate(mouseX,mouseY);
// translate = move the origin point
//(x,y)
// anything drawn after this will be moved over
// (mouseX, mouseY) moves the origin to the mouse position

rotate(radians(mouseX));
// rotate(angle in radians)
// rotates everything drawn after this


let scalefactor = map(mouseX,0,height,0.5,3);
// makes the scale factor change based on mouseY position

scale(scalefactor);

// scale(2);
// scale(x,y)
// scales everything drawn after this
// x = horizontal scale factor
// y = vertical scale factor
// if you supply only one value, it scales both x and y by that value


circle (0,0,100);
//(x,y,diameter)
circle (0,0,40);
circle (10,90,40);

let angle;
// let = declare a variable
angle = map(mouseX,0,width,0,360);
// map(value to map, start of value range,...
// ...end of value range, start of target range, end of target range)
// map is a function that scales numbers proportionally
// parameters:
// 1: value variable to scale
// 2: min of input range
// 3: max of input range
// 4: min of target range
// 5: max of target range

pop();
// end of translate

text(mouseX + "," + mouseY, 5, 15);
// text (what to write, x position, y position)
//text function: text,x,y of top left corner


}
