let video;
let bodyPose; 
let connections;
let poses = [];


function preload(){
  // loads the bodyPose model
  bodyPose = ml5.bodyPose();
}

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

  let words = ['dazzling', 'quizzical', 'distinct', 'auspicious', 'soft', 'exciting','sparkling', 'fierce', 
  'fluttering', 'concerned', 'courageous', 'sticky', 'adorable', 'tired', 'guarded', 'humorous', 'aware',
  'cynical', 'clean', 'wistful', 'futuristic', 'amazing', 'glossy', 'sleepy'];
  // 24 words

  let choice = random(words);



  if(poses.length> 0

  ){
    fill(0);


    text(choice, poses[0].keypoints[0].x,poses[0].keypoints[0].y)
    // follows head
    }

  }




function gotPoses(results){
  poses = results;
}
