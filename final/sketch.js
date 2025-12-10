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
    let person = poses[i];
    let nose = person.keypoints[0];
    let leftWrist = person.keypoints[9];
    let rightWrist = person.keypoints[10];
    if (nose.confidence > 0.1 && 
      leftWrist.confidence > 0.1 && 
      rightWrist.confidence > 0.1){
   
    // RIGHT HAND
      let micOnRight = dist(nose.x, nose.y, rightWrist.x, rightWrist.y);
    // LEFT HAND
      let micOnLeft = dist(nose.x, nose.y, leftWrist.x, leftWrist.y);

      let usingMic = (micOnRight < 200) || (micOnLeft < 200);
      // distance will depend on how far the person is from the camera
      // this makes it so that both hands can trigger the spotlight
      if (usingMic){
        fill (255);
      } else {
        fill(0);
      }

    // HEAD
        circle(nose.x, nose.y, 180);
    }
  }


function gotPoses(results){
  poses = results;
}
}
