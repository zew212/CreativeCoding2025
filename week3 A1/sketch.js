
function setup() {
  createCanvas(windowWidth, windowHeight);
  // make the canvas the size of the window
  background(234,232,224);
  // set the background color to a light gray
  
}

function draw() {

fill("rgba(190, 8, 120, 0.2)");
beginShape();
// vertex(x, y)
vertex(windowWidth/2, 0);
// top left point (was at 240)
vertex(windowWidth/3, 150);
// bottom left point
vertex(windowWidth/1.8, 205);
// bottom right point
vertex(windowWidth/1.4, 50);
// top right point
endShape();

noStroke()
fill("rgba(240, 219, 32, 1)");
circle(windowWidth/2.1,500,18);
// circle(x, y, diameter)
// the higher the x value, the more to the right
// the higher the y value, the more to the bottom

fill("rgba(17, 227, 216, 1)");
beginShape();
// vertex(x, y)
vertex(windowWidth/7.5, 385);
// top left point
vertex(windowWidth/7.5, 395);
// bottom left point
vertex(windowWidth/1.43, 410);
// bottom right point
vertex(windowWidth/1.43, 400);
// top right point
endShape();

strokeWeight(weight=2);
fill("rgba(85, 107, 64, 0.5)");
//rect(100, 375, 50, 50)
// (x, y, width, height)



fill("rgba(56, 14, 224, 0.5)");
//rect(70, 400, 300, 10);
// (x, y, width, height)
// x and y are the coordinates of the top left corner
// can rectatngles use different y values to create a slant?


fill("rgba(87, 20, 94, 0.5)");
beginShape();
// vertex(x, y)
vertex(180, 300);
// top left point
vertex(200, 420);
// bottom left point
vertex(250, 420);
// bottom right point
vertex(290, 310);
// top point
endShape();


fill("rgba(148, 165, 92, 0.5)");
beginShape();
// vertex(x, y)
vertex(windowWidth/3.9, 455);
// top left point
vertex(windowWidth/3.6, 480);
// bottom left point
vertex(windowWidth/2.53, 455);
// bottom right point
vertex(windowWidth/2.7, 430);
// top right point
endShape();

fill("rgba(25, 99, 99, 0.5)");
beginShape();
// vertex(x, y)
vertex(windowWidth/2.65, 465);
// top left point
vertex(windowWidth/2.58, 480);
// bottom left point
vertex(windowWidth/2.23, 470);
// bottom right point
vertex(windowWidth/2.28, 455);
// top right point
endShape();

fill("rgba(25, 99, 99, 0.5)");
beginShape();
// vertex(x, y)
vertex(windowWidth/2.3, 475);
// top left point
vertex(windowWidth/2.3, 485);
// bottom left point
vertex(windowWidth/1.61, 490);
// bottom right point
vertex(windowWidth/1.6, 480);
// top right point
endShape();

fill("rgba(148, 165, 92, 1)");
rect(windowWidth/6, windowWidth/1.39, height/12, width/10);
// (x, y, width, height)
// square in the bottom right corner
// opposite of the first square

}