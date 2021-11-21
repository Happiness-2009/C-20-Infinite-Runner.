var background, backImg ,shark, sharkImg, fish2, fish3, fish4, fish2Img, fish3Img, fish4Img, fish1Group, fish2Group, fish3Group, fish4Group;
    
var serve=0;
var gameState = serve;
var play=1;
function preload(){

sharkImg= loadImage("shark.png");
backImg= loadImage("ocean.jpeg");


fish2Img=loadImage("fish2.png");


}

function setup() {
createCanvas(626,176);
  
background= createSprite(0,0,600,400);
background.addImage(backImg);
background.scale=1.5;
//making moving background
background.x=background.width/2;
background.velocityX=-4;
  
  shark= createSprite(100,100,20,20);
  shark.addImage(sharkImg);
  shark.scale=0.2;

  

  fish2Group = new Group();

  
  score=0
}

function draw() {
createEdgeSprites();

  if(gameState == serve){
    background.velocityX = 0;
    shark.velocityY=0;

    fish2Group.setVelocityXEach(0);

    stroke("black");
    strokeWeight(2);
    textSize(20); 
    fill("white");
    text("Press 'space' to play", 10,30);
  }
  
  
  
  if(gameState==play){ 
   if(background.x<0) {
background.x=background.width/2;
}
  

      if (keyDown("UP_ARROW")) {

 shark.y=shark.y-7;
}



if (keyDown("DOWN_ARROW")) {

   shark.y=shark.y+7;
 }        

  
  if(fish2Group.isTouching(shark)){
     fish2Group.destroyEach();
     score=score+1
     }
  

  

  fishes2();

  drawSprites();
  
  stroke("black");
strokeWeight(2);
textSize(20); 
fill("red");
text("Score: "+ score, 10,20);
  }
  if(keyDown("space")){
    gameState=play;
    background.velocityX=-4
  }
}

function fishes2(){
  if (frameCount % 100 === 0) {
  fish2= createSprite(800,100,40,10);
  fish2.y = random(0,180); 
  fish2.velocityX=-7;
  fish2.addImage(fish2Img);
  fish2.scale=0.05;
  fish2.lifetime = 300;
  shark.depth = fish2.depth + 1;
    fish2Group.add(fish2);
}
}
