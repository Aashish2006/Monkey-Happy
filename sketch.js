
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400)

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 355, 900, 10);
  ground.velocityX = -4;
  ground.x = 500;
  
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}


function draw() {
 background("white");
  
  if(ground.x < 0){
     ground.x = ground.width/2;
     }
  
  if(keyDown("space")&& monkey.y >= 300){
     monkey.velocityY = -12;
     }
  
   if(foodGroup.isTouching(monkey)){
     foodGroup.destroyEach();
     score = score + 2;
   }
  
   if(obstaclesGroup.isTouching(monkey)){
     monkey.visible = false;
     ground.velocityY = 0;
     foodGroup.setVelocityXEach(0);
     obstaclesGroup.setVelocityXEach(0);
     
   }
   
   monkey.velocityY = monkey.velocityY + 0.8;
   monkey.collide(ground);
  
  Banana(); 
  rocks();
  
  drawSprites();
  
  textSize(15);
  text("Score:" + score, 300, 50);
}

function Banana(){
  
 if(frameCount%80 === 0){
   banana = createSprite(350, 200, 20, 20);
   banana.y = Math.round(random(150, 300));
   banana.addImage(bananaImage);
   banana.velocityX = -6;
   banana.scale = 0.1;
   banana.lifetime = 400;
   
   foodGroup.add(banana);
 }
}
 
 function rocks(){
   if(frameCount%300 === 0){
   obstacle = createSprite(380, 335, 40, 20);
   //obstacle.y = Math.round(random(150, 300));
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.scale = 0.1;
   obstacle.lifetime = 400;
   
   obstaclesGroup.add(obstacle);
 }
}




