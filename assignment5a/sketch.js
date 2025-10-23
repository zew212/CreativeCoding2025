let speed = 0.01;
let noisePosition = 0;


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background ('#eae1dfff');
  translate (width / 4, height / 4);
  noStroke();
  fill ('#FF5733');
  let diam = noise(noisePosition);
  diam = map(diam, 0, 1, 0, height);
  circle(0,0,diam);
// circle (width / 2, height / 2, diam);

  noisePosition = noisePosition + speed;
  
  function setup() {
  createCanvas(400, 400);
  
}
}

