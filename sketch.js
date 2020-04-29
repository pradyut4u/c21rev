var sun,earth;
function setup() {
  createCanvas(800,800);
  sun=createSprite(400, 400, 50, 50);
  earth=createSprite(200, 390, 40, 40);  
}

function draw() {
  background(0,0,0); 
   if(sun.y>earth.y){
    earth.velocityX=2
    earth.velocityY=-2
  } 
  if(sun.x<earth.x){
    earth.velocityX=2
    earth.velocityY=2
  }
  if(sun.y<earth.y){
    earth.velocityX=-2
    earth.velocityY=2
  } 
  if(sun.x>earth.x && sun.y<earth.y){
    earth.velocityX=-2
    earth.velocityY=-2
  }
  drawSprites();
  sun.width=sun.width+0.2;
  sun.height=sun.width;
  if(sun.isTouching(earth)){
    earth.destroy()
  }
}