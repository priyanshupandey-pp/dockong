var backgroundImage;
var docking;
var colorful;

function preload(){
  backgroundImage=loadImage("spacebg.jpg")
  docking=loadImage("iss.png")
  colorful=loadImage("spacecraft1.png")
}

function setup() {
  createCanvas(800,400)
  dock=createSprite(300,150,20,20)
  dock.addImage("image",docking)
  dock.scale=0.9
  dock.debug=true;

  color=createSprite(240,270,30,30)
  color.addImage("image",colorful)
  color.scale=0.1
  color.debug=true;
}

function draw() {
  background(backgroundImage); 
  if (keyDown("up")) {
    color.velocityY = -2;
  }
  if(color.isTouching(dock)){
    color.velocityY=0;
    text(20,20,"docking successfully")
  }
  
  drawSprites();
}