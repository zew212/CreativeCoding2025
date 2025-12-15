let video;
let bodyPose; 
let connections;
let poses = [];


let headPX = 0;
let headPY = 0;

let headTargetX = 0;
let headTargetY = 0;

let headCurrentX = 0;
let headCurrentY = 0;

let lerpAmount = 1;
let speed = 5;
// I tested it and 5 seemed to do the job of following normal motion



function preload(){
  // loads the bodyPose model
  bodyPose = ml5.bodyPose();
}

function setup(){
  // for this projection I decided to do windowWidth/Height because I wanted the surface to be as big 
  // as possible (and then position the projector accordingly)
  createCanvas(windowWidth,windowHeight);
  // starts the video capture
  video = createCapture(VIDEO);
  // 640x480 are the pixels of the video
  // got this from the ml5 bodyPose video example shared in class
  video.size(640,480);
  video.hide();

  bodyPose.detectStart(video, gotPoses);
  connections = bodyPose.getSkeleton();
}

function draw(){
  background(0);
  
  let scaleFactor = windowWidth/640;
  // windowWidth/640 scales the 640 pixel wide video to the full width of the window
  scale(scaleFactor);

  if (poses.length > 0){
    let person = poses[0];
    let head = person.keypoints[0];
    let leftWrist = person.keypoints[9];
    let rightWrist = person.keypoints[10];

    if (head.confidence > 0.1 && 
      leftWrist.confidence > 0.1 && 
      rightWrist.confidence > 0.1){

    
      headCurrentX = lerp(headPX, headTargetX, lerpAmount);
      headCurrentY = lerp(headPY, headTargetY, lerpAmount);

      lerpAmount += speed;
      lerpAmount = constrain(lerpAmount, 0, 1);

      let micOnRight = dist(head.x, head.y, rightWrist.x, rightWrist.y);
      let micOnLeft = dist(head.x, head.y, leftWrist.x, leftWrist.y);

      let distanceConstant = dist(person.keypoints[12].x, person.keypoints[12].y,
        person.keypoints[5].x,person.keypoints[5].y);
      // normalizing the distance of the mic to the head
      // makes it so that the distance is relative to how far the person is from the camera (works from all ranges)
      let normalizedRight = micOnRight/distanceConstant;
      let normalizedLeft = micOnLeft/distanceConstant;

      let usingMic = (normalizedLeft < 0.7) || (normalizedRight < 0.7);
      // distance will depend on how far the person is from the camera
      // this makes it so that both hands can trigger the spotlight
      if (usingMic){
        fill (255);
      } else {
        fill(0);
      }

    // HEAD
        circle(headCurrentX, headCurrentY, 200);
    }
  }



}

function gotPoses(results){
  poses = results;

  if (poses.length > 0){
    let head = poses[0].keypoints[0];

    headPX = headCurrentX;
    headPY = headCurrentY;

    headTargetX = head.x;
    headTargetY = head.y;
    
    lerpAmount = 0;
  }
}
