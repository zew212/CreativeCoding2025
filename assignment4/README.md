For this project, I think I want to use my bugs from the abstract clock and create a sort of game. I'm thinking about having the mouse be a sort of foor (i.e. pizza ) and have the bugs roaming around. The mouse needs to avoid the bugs and if the bugs do touch the mouse something happens (game over?). I'm also thinking that everytime you click a certain key, the bugs change type and go faster– different levels.



function draw() {
  background(0);
  push();
  translate(mouseX-145, mouseY-127.5);
      // cake
  noStroke();
  fill ('pink');
  rect(100,100,90,60);
     // candles
  fill (255);
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
  
  pop();
  }