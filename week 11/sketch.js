let video;

let bodyPose;

let connections;

let poses = [];

function preload(){
  bodyPose = ml5.bodyPose("MoveNet", {flipped: true});
}

function gotPoses(results){
  poses = results;
}

function setup(){
  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.hide();
  bodyPose.detectStart(video, gotPoses);
  connections = bodyPose.getSkeleton();
}

function draw(){
  image(video,0,0);
  
  if (poses.length > 0){
    let pose = poses[0];
    let x = pose.nose.x;
    let y = pose.nose.y;
    
    let rx = pose.right_wrist.x;
    let ry = pose.right_wrist.y;
    
    let lx = pose.left_wrist.x;
    let ly = pose.left_wrist.y;
    
    fill (255);
    noStroke ();
    //circle (rx,ry,20);
    //circle (lx,ly,20);
    
    let d = dist(rx,ry,lx,ly);
    
    fill (255);
    circle (rx,ry,80);
    
    fill ("blue");
    circle (lx, ly, 80);
    
  }
}
