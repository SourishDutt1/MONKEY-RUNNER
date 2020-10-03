PLAY=1;
END=0;
gameState=PLAY;
var monkey , monkey_running;
var  banana ,bananaImage,bananasGroup, obstacle, obstacleImage,backgroundImage,alien,alienImage,gameover,gameoverImage;
var FoodGroup, obstacleGroup
var bananacollected=0
var survivaltime=0
function preload(){
sound=loadSound("funny_game.mp3");
  backgroundImage=loadImage("Marcus_village.png");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
monkey_collided=loadAnimation("sprite_0.png");  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  alienImage=loadImage("download (19).png");
 gameoverImage=loadImage("images (3).jpg");
}



function setup() {


  createCanvas(windowWidth,windowHeight)
sound.play();
  backgr=createSprite(windowWidth-500,windowHeight-400,windowWidth-70,windowHeight+50);
  backgr.addImage(backgroundImage);
  backgr.scale=2.7;
  backgr.x=backgr.width/2;
   backgr.velocityX = -(10 + bananacollected/1);
  
  //monkey
  monkey=createSprite(180,height-560);
 monkey.addAnimation("Running",monkey_running);
  monkey.addAnimation("collided",monkey_collided);   
 monkey. scale=0.2
  monkey.debug=false
monkey.setCollider("circle",0,0,150);
  //ground
  ground=createSprite(300,570,600,10);
  ground.visible=false
      bananasGroup=new Group();
   obstaclesGroup=new Group();
  alienGroup=new Group();
  gameoverGroup=new Group();

}


function draw() {

  if(gameState===PLAY){
       if (backgr.x < 0){
      backgr.x = backgr.width/2;
    }
       survivaltime = survivaltime + Math.round(getFrameRate()/60);


    if(keyDown("space")&& monkey.y >= 370) {
        monkey.velocityY = -12;
    
    }
  //monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8
  if( obstaclesGroup.isTouching(monkey)&&monkey.scale===0.2){
monkey.scale=0.1
monkey.y=40
bananacollected=0
    monkey.setCollider=("circle",0,0,50);
    
     }
    if( obstaclesGroup.isTouching(monkey)&&monkey.scale===0.12){
monkey.scale=0.1
monkey.y=40
bananacollected=0
       monkey.setCollider=("circle",0,0,50);
     }
    if( obstaclesGroup.isTouching(monkey)&&monkey.scale===0.14){
monkey.scale=0.1
monkey.y=40
 bananacollected=0
       monkey.setCollider=("circle",0,0,50);
     }
    if( obstaclesGroup.isTouching(monkey)&&monkey.scale===0.16){
monkey.scale=0.1
monkey.y=40
bananacollected=0
       monkey.setCollider=("circle",0,0,50);
     }
    if( alienGroup.isTouching(monkey)&&monkey.scale===0.2){
monkey.scale=0.1
monkey.y=40
bananacollected=0
    monkey.setCollider=("circle",0,0,50);
     }
    if( alienGroup.isTouching(monkey)&&monkey.scale===0.12){
monkey.scale=0.1
monkey.y=40
bananacollected=0
       monkey.setCollider=("circle",0,0,50);
     }
    if( alienGroup.isTouching(monkey)&&monkey.scale===0.14){
monkey.scale=0.1
monkey.y=40
 bananacollected=0
       monkey.setCollider=("circle",0,0,50);
     }
    if( alienGroup.isTouching(monkey)&&monkey.scale===0.16){
monkey.scale=0.1
monkey.y=40
bananacollected=0
       monkey.setCollider=("circle",0,0,50);
     }
  
if(bananasGroup.isTouching(monkey)){
   bananacollected =bananacollected + 1;
   bananasGroup.destroyEach();
   }
    monkey.collide(ground); 
    switch(bananacollected){
        case 5: monkey.scale=0.12;
                break;
        case 10: monkey.scale=0.14;
                break;
        case 15: monkey.scale=0.16;
                break;
        case 20: monkey.scale=0.18;
                break;
        default: break;
    }
  spawnFood();
spawnObstacles();
spawnalien(); 
    

//background
  }

  
    if( obstaclesGroup.isTouching(monkey)&&monkey.scale===0.1){
gameState=END;
     }
      if( alienGroup.isTouching(monkey)&&monkey.scale===0.1){
gameState=END;
     }

 drawSprites(); 
         stroke("red");
  textSize(20);
  fill("yellow");
  text("SURVIVAL TIME:"+survivaltime,windowWidth-490,windowHeight-580);
       stroke("red");
  textSize(20);
  fill("yellow");
      text("BANANAS COLLECTED: "+bananacollected, windowWidth-490,windowHeight-600);

  //monkey jump
  if (gameState===END){

  textSize(50);
  fill(mouseX+30,180,mouseY);
    strokeWeight(5);
    text("Tap To Restart",windowWidth-550,windowHeight-200);
    //banana and rock life time after touching rock
       obstaclesGroup.setLifetimeEach(-1);
    bananasGroup.setLifetimeEach(-1);
            alienGroup.setLifetimeEach(-1);
  //  banana and rock velocity after touching rock
    obstaclesGroup.setVelocityXEach(0);
     bananasGroup.setVelocityXEach(0); 
             alienGroup.setVelocityXEach(0); 
    //monkey's animation after touching rock
  monkey.changeAnimation("collided",monkey_collided);   
    monkey.velocityY = 0;
    monkey.visible=false
    
    
      backgr.velocityX=0 
  if (frameCount % 80 === 0) {
    var gameover=createSprite(windowWidth-800,windowHeight-400,windowWidth-70,windowHeight+50);
gameover.addImage(gameoverImage);
 gameover.scale=1
 
  gameover.velocityX = 20
     //assign lifetime to the variable
    gameover.lifetime = 300;
    monkey.depth = gameover.depth + 1;
    
    //add each banana to the group
    gameoverGroup.add(gameover);
  }
  
        if (mousePressedOver(backgr)&&gameState===END)
  reset();    
  
  } 
}
function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 120 === 0) {
    var banana = createSprite(width+800,height-250,40,10);
    banana.y = random(height-250,height-350);    
    banana.addImage(bananaImage);
    banana.scale = 0.15;
       banana.velocityX = -(10 + bananacollected/1);
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add each banana to the group
    bananasGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 200 === 0) {
    var obstacle = createSprite(width+800,height-105,10,40);
     obstacle.velocityX = -(10 + bananacollected/1);
    obstacle.addImage(obstaceImage );
   
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.19;
    obstacle.lifetime = 300;
    
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  
  }
}
function spawnalien() {
  //write code here to spawn the food
  if (frameCount % 70 === 0) {
    var alien = createSprite(width+800,250,40,10);
    alien.y = random(height-150,height-350);    
    alien.addImage(alienImage);
    alien.scale = 1;
       alien.velocityX = -(10 + bananacollected/1);
     //assign lifetime to the variable
    alien.lifetime = 300;
    monkey.depth = alien.depth + 1;
    
    //add each banana to the group
    alienGroup.add(alien);
  }
}

function reset(){
 gameState=PLAY; 
obstaclesGroup.destroyEach();
bananasGroup.destroyEach();
alienGroup.destroyEach();  
  bananacollected=0
  monkey.changeAnimation("Running",monkey_running);  
  gameoverGroup.destroyEach();
  monkey.scale=0.2
     monkey.visible=true
  backgr.velocityX=-(10 + bananacollected/1);
  survivaltime=0  
}