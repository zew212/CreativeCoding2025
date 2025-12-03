// IN CLASS
// two people 

let video;
let bodyPose;
let connections;
let poses = [];
// distance between hand circles
// let d1 = dist(poses[0].keypoints[9].x,poses[0].keypoints[9].y,poses[0].keypoints[10].x,poses[0].keypoints[10].y);


function preload(){
  // loads the bodyPose model
  bodyPose = ml5.bodyPose();
}

function setup(){
  // for the other projection mapping project we weren't 
  // supposed to to windowWidth/Height but for this it's fine 
  // because we're positioning the surface based on the projection right?
  createCanvas(windowWidth,windowHeight);
  // starts the video capture
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();

  bodyPose.detectStart(video, gotPoses);
  connections = bodyPose.getSkeleton();
}

function draw(){
  background(0);

  let scaleFactor = windowWidth/640;
  scale(scaleFactor);

  for (let i = 0; i < poses.length; i++){
    let pose = poses[i];
    for (let j = 0; j < pose.keypoints.length; j++){
      let keypoint = pose.keypoints[j];
      if (keypoint.confidence > 0.1){
        fill(0,255,0);
        noStroke();
        textSize(20);
        //text(j, keypoint.x, keypoint.y);
      }
    }
  }

  if(poses.length> 0


  ){
    fill(255);

    let handDistance = dist(poses[0].keypoints[9].x,poses[0].keypoints[9].y,poses[0].keypoints[10].x,poses[0].keypoints[10].y);
      if(handDistance < 100){
        fill('blue');
        
      }
      else{
        fill(255);
      }

    // BODY
    beginShape();
    vertex(poses[0].keypoints[5].x,poses[0].keypoints[5].y);
    vertex(poses[0].keypoints[6].x,poses[0].keypoints[6].y);
    vertex(poses[0].keypoints[12].x,poses[0].keypoints[12].y);
    vertex(poses[0].keypoints[11].x,poses[0].keypoints[11].y);
    endShape();

    // HEAD
    beginShape();
    circle (poses[0].keypoints[1].x,poses[0].keypoints[1].y, 120);

    endShape();

    // // LEFT ARM
    // strokeWeight(40);
    // line(poses[0].keypoints[5].x,poses[0].keypoints[5].y, poses[0].keypoints[9].x,poses[0].keypoints[9].y);

    // HANDS
    // left
    circle(poses[0].keypoints[9].x,poses[0].keypoints[9].y, 80);
    // right
    circle(poses[0].keypoints[10].x,poses[0].keypoints[10].y, 80);


  }
}


function gotPoses(results){
  poses = results;
}