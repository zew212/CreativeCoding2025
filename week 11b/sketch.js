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

    for (let i = 0; i < pose.keypoints.length; i++){
      let keypoint = pose.keypoints[i];
      fill (0, 0, 255);
      noStroke();
      if (keypoint.confidence > 0.1){
      circle(keypoint.x, keypoint.y, 16);
      }
    }
    
    for (let i = 0; i < connections.length; i++){
      let connection = connections[i];
      let a = connection[0];
      let b = connection[1];
      let keyPointA = pose.keypoints[a];
      let keyPointB = pose.keypoints[b];
      stroke(255);
      strokeWeight(8);
      line(keyPointA.x, keyPointA.y, keyPointB.x, keyPointB.y);
    }
    
    
  }

}