let speed = 0.01;
let noisePosition = 0;


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background ('#3d12e8ff');
  translate (width / 4, height / 4); // I used the code from the 
  // class lesson and now my function is built around this translate
  noStroke();
  fill ('#FF5733');
  let diam = noise(noisePosition);
  diam = map(diam, 0, 1, 0, height);
    circle(0,0,diam);
  fill ('#3357FF');
    circle(-3, -4, diam*0.9);
  fill ('#33FF57');
    circle(width/2,-3,diam*0.75);
  fill ('#1dbf8cff');
    circle(width / 2,50,diam*0.5);
  fill ('#f37515ff');
    circle(4,3,diam*0.6);
  fill ('#ad6a44ff');
    circle(150,250,diam);
  fill ('#f0760cff');
    circle(250,200,diam*0.75);
  fill ('#7f4f24ff');
    circle(250,200,diam*0.5);
  fill ('#c1440eff');
    circle(-50,150,diam*0.4);
  fill ('#e6b89cff');
    circle(0,150,diam*0.18);

  noisePosition = noisePosition + speed;
   
}
