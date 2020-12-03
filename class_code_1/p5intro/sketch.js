let xPos=0;
let radius = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 30, 255)
  ellipse(xPos, height/2, 50, 50);
  stroke(0, 0, 0);
  strokeWeight(1);
  //print(xPos);

  xPos+=3;
  
  if(xPos > width + radius/2){
    xPos = -radius/2;
    
  }
  
  

}
