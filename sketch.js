var r1,r2;




function setup() {
  createCanvas(800,400);
  r1=createSprite(100, 200, 50, 50);
  r2=createSprite(700,200,50,50);
  r1.velocityX=5;
  r2.velocityX=-5;
}

function draw() {
  background("green");  
  bounceOff(r1,r2);
  if(hasCollided(r1,r2)){
    r1.shapeColor="black";
    r2.shapeColor="yellow";
  }
  drawSprites();
}