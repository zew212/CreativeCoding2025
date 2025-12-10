let video;
let bodyPose; 
let connections;
let poses = [];
let head1;
let head2;
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
   
      }
    }
  }

  if(poses.length> 0){

    // RIGHT HAND
      let micOnRight = dist(poses[0].keypoints[0].x,poses[0].keypoints[0].y,
        poses[0].keypoints[10].x,poses[0].keypoints[10].y);
    // LEFT HAND
      let micOnLeft = dist(poses[0].keypoints[0].x,poses[0].keypoints[0].y,
        poses[0].keypoints[9].x,poses[0].keypoints[9].y);

      let usingMic = (micOnRight < 200) || (micOnLeft < 200);
      if (usingMic){
        fill (255);
      } else {
        fill(0);
      }

    // HEAD
        circle(poses[0].keypoints[0].x,poses[0].keypoints[0].y, 120);
    }
  }


function gotPoses(results){
  poses = results;
}
