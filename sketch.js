var backgroundImage;
var docking;
var colorful_running;
var hasdocked=false

function preload(){
  backgroundImage=loadImage("spacebg.jpg")
  docking=loadImage("iss.png")
  colorful1=loadImage("spacecraft1.png")
  colorful2=loadImage("spacecraft2.png")
  colorful3=loadImage("spacecraft3.png")
  colorful4=loadImage("spacecraft4.png")
  

}

function setup() {
  createCanvas(800,400)
  dock=createSprite(300,150,20,20)
  dock.addImage("image",docking)
  dock.scale=0.9
  dock.debug=false;

 color=createSprite(240,270,30,30)
 color.addImage(colorful1)
  color.scale=0.1
  color.debug=false;
}

function draw() {
  background(backgroundImage); 
  color.addImage(colorful1)
  if(!hasdocked){

  
  if (keyDown("up")) {
    color.y =color.y-2 
  }
  if (keyDown("down")) {
    color.y =color.y+2 
  }
  if (keyDown("left")) {
    color.x =color.x-2 
    color.addImage(colorful3)
  }
  if (keyDown("right")) {
    color.x =color.x+2 
    color.addImage(colorful4)
  }
}
if(color.y<=(dock.y+70)&& color.x<=(dock.x-10)){
  hasdocked=true
  textSize(25)
  fill ("white")
  text ("docking successful",200,300)
}
  drawSprites();
}
