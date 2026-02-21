let isShort = false;
let half = false;

let canvasHeight = document.body.clientHeight;
let canvasWidth = isShort ? half ? canvasHeight*9/8 : canvasHeight*9/16 : document.body.clientWidth;
let Debug = true;
let Drawing = false;
let i = -1;
let points = [];

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noFill();
  stroke(255,0,0)
  strokeWeight(20)
  
  if(points.length){
    beginShape()
    curveVertex(points[0].x, points[0].y)
    points.forEach(p => {
      curveVertex(p.x,p.y)
    });
    curveVertex(points[points.length-1].x,
                points[points.length-1].y)
    endShape()
  }
  
  if(Drawing){
    points[i].x = mouseX;
    points[i].y = mouseY;
  }
  if(Debug){
    points.forEach((p)=>{
      stroke(0)
      strokeWeight(1)
      fill(255,0,255)
      circle(p.x,p.y,25)
    })
  }
}

function keyPressed(e){
  if(key === 'd'){
    Debug = !Debug;
  }
  if(e.key === 'q'){
    P1 = true;
  }
  if(e.key === 'w'){
    P2 = true;
  }
  if(e.key === 'e'){
    P3 = true;
  }
  if(e.key === 'r'){
    P4 = true;
  }
}

function keyReleased(e){
  if(e.key === 'q'){
    P1 = false;
  }
  if(e.key === 'w'){
    P2 = false;
  }
  if(e.key === 'e'){
    P3 = false;
  }
  if(e.key === 'r'){
    P4 = false;
  }
}


function mousePressed(e){
  if(e.button == 0){
    points.push({
      x:mouseX,y:mouseY,
    })
    i++;
    Drawing = true;
  }
}

function mouseReleased(e){
  if(e.button == 0){
    Drawing = false;
  }
}

function GetRandX(){
  return Math.random() * canvasWidth;
}

function GetRandY(){
  return Math.random() * canvasHeight;
}
