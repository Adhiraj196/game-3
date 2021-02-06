const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var background,backgroundImg;
var ground2;
var spiderman;
var spidermanImg;
var rock;
var rockImg;
var buildingsgroup;


function preload() {
  backgroundImg = loadImage ("City.jpg");
  obstacleImg = loadImage ("Building.png");
  obstacleImg1 = loadImage ("Building 2.png");
  spidermanImg = loadImage ("Spidey.png");
  rockImg = loadImage ("rock.png");
  
}

function setup() {
  createCanvas(1200,700);
  background = createSprite (600, 200,1200,700);
  background.addImage(backgroundImg)
  background.scale = 0.3
  ground = createSprite (600,525,1200,15);
  ground2 = createSprite (600,1,1200,15);
  spiderman = createSprite (200,100,20,20);
  rock = createSprite (200,420,200,200);
  spiderman.addImage(spidermanImg);
  spiderman.scale = 0.1;
  rock.addImage(rockImg);
  rock.scale = 0.1;
  spiderman.velocityY = 1;
  buildingsgroup = new Group();
  //rock.debug = true
}

function draw() {
  drawSprites();
  SpwanBuilding(450);
  SpwanBuilding(75);
  spiderman.velocityY = spiderman.velocityY + 0.8;
  spiderman.collide(rock);
  if (rock.isTouching(buildingsgroup)){
  rock.velocityX = -10;
  }
}

function SpwanBuilding(yPos){
   if(frameCount%70===0){
     Building = createSprite(1400,yPos,random(800,1500),700,);
    var num = Math.round(random(1,5));
     if(num == 1){
       Building.shapeColor = "blue"
     }
     else if(num == 2){
      Building.shapeColor="white"
    }
    else if(num == 3){
      Building.shapeColor = "orange"
    }
    else if(num == 4){
      Building.shapeColor = "black"
    }
    else {
      Building.shapeColor = "yellow"
    }
    
     Building.lifetime = 325
     Building.scale = 0.2
     Building.velocityX = -5
     buildingsgroup.add(Building);
   }
   

}

