let video;
let bodyPose; 
let connections;
let poses = [];


function preload(){
}

function gotPoses(results){
  poses = results;}


function setup(){
  createCanvas(windowWidth,windowHeight);
  // starts the video capture
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();

  bodyPose.detectStart(video, gotPoses);

  
}

function draw(){
  background(255);

  let scaleFactor = windowWidth/640;
  scale(scaleFactor);

  stroke(5);
  noFill();
  circle(poses[0].keypoints[0].x,poses[0].keypoints[0].y, 50);

  }




