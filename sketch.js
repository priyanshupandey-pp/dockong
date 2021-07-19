var backgroundImage;
var docking;
var colorful_running;

function preload(){
  backgroundImage=loadImage("spacebg.jpg")
  docking=loadImage("iss.png")
  colorful_running=loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png")
   man=loadImage("spacecraft1.png")
}

function setup() {
  createCanvas(800,400)
  dock=createSprite(300,150,20,20)
  dock.addImage("image",docking)
  dock.scale=0.9
  dock.debug=false;

 color=createSprite(240,270,30,30)
 color.addAnimation("running",colorful_running)
  color.scale=0.1
  color.debug=false;
  color.debugMode=circle
}

function draw() {
  background(backgroundImage); 
  if (keyDown("up")) {
    color.velocityY = -0.5;
  }
  if(this.color.position.y<210){
   color.velocityY=0
  }
  
  drawSprites();
}