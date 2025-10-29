let speed = 0.01;
let noisePosition = 0;


function setup() {
  createCanvas(400, 400);
  
}
 
function draw() {
  background ('orange');
  translate (width / 4, height / 4); // I used the code from the 
  // class lesson and now my function is built around this translate


  let diam = noise(noisePosition);
  diam = map(diam, 0, 1, 0, height);
  // if the circles (pupils) are centered at the same point as the eclipses (eyes),
  // the pupil will never be shown out of the eye
  fill (255);
    ellipse(width/2,-3,diam*1.0, diam*0.6);
  fill ('#d80505ff');
    circle(width/ 2,-3,diam*0.2);
    fill (255);
    ellipse(300,50,diam*0.7, diam*0.4);
  fill ('#d80505ff');
    circle(300,50,diam*0.2);
  fill (255);
    ellipse(250,200,diam*0.8, diam*0.5);
  fill ('#d80505ff');
    circle(250,200,diam*0.4);
  fill (255);
    ellipse(0,0,diam*1.2, diam*0.7);
  fill ('#d80505ff');
    circle(0,0,diam*0.4);
  fill (255);
    ellipse(50,200,diam*0.9, diam*0.5);
  fill ('#d80505ff');
    circle(50,200,diam*0.3);
  fill (255);
    ellipse(180,140,diam*0.6, diam*0.3);
  fill ('#d80505ff');
    circle(180,140,diam*0.1);
  fill (255);
    ellipse(-60,150,diam*0.5, diam*0.2);
  fill ('#d80505ff');
    circle(-60,150,diam*0.08);







  noisePosition = noisePosition + speed;
   
}
