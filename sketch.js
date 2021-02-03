
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var banana_group;
var obstacle_group;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(600,400);
  monkey = createSprite(100,250,20,50);
  monkey.addAnimation("run",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(300,390,600,15);
  
  banana_group = createGroup();
  obstacle_group = createGroup();
}

function draw() {
  background(255);
  
  if(keyDown("space") && monkey.y>=321){
    monkey.velocityY = -12;
    console.log("y");
  }
  
 monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
  console.log(monkey.y);
  
  drawSprites();  
}

function food(){
  if(frameCount%80===0){
 banana = createSprite(600,Math.round(random(120,200)),5,10);
    banana.addImage("ba",bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 150;
    banana_group.add(banana);
  }  
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(200,200,10,10);
    //obstacle.addImage("ob",obstacleImage);
    obstacle.velocity = -4;
    obstacle.scale = 0.1;
    obstacle.lifetime = 150;
    obstacle_group.add(obstacle);
  }
  
}
