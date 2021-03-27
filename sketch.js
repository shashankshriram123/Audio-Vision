var mic;
var Volume_History = [];
var canvas;
var video
function setup() {
  canvas=createCanvas(710, 500);
  video=createCapture(VIDEO);
  video.size(710,500)
  video.position(800,300);
  canvas.position(100,300)
  mic = new p5.AudioIn();

// gets audio in from current mic
  mic.start();
}

function draw() {
  background(155);

 
  var currentVolume = mic.getLevel();
  currentVolume = currentVolume*15;
  Volume_History.push(currentVolume);
 
  noFill();
  beginShape();
 
  //plot the sound on canvas
  for (var i =0; i < Volume_History.length; i++){
    var y = map(Volume_History[i], 0,1, height/1.05, 0);
    vertex(i,y);
   
  }
  endShape();
  //ellipse(355, 100, vol*200,vol*200);
 
  if (Volume_History.length > width-100) {
    Volume_History.splice(0,1);
  }

 

}
