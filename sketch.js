
var Gamestate = "Play";
var BatGroup,TreeGroup;
var bird,ground,obstacles,clouds,r1,bat,r2,grass;


function preload(){
  birdie = loadImage("Bird.jpg");
  //Obimg = loadImage("ob.png");
  Ob1img = loadImage("ob1.png");
  Ob2img = loadImage("ob2.png");
  Ob3img = loadImage("ob3.png");
  Ob4img = loadImage("ob4.png");
  Batimg = loadImage("Bat1.png");
  Grassimg = loadImage("greenGrass.jpg");
  g = loadImage("ground.png");
}

function setup() {
r1 = Math.round(random(150,190));
//r2 = Math.round(random(100,180));

  createCanvas(1536,721);
 bird =  createSprite(400, 200, 50, 50);
 bird.addImage(birdie);


 ground = createSprite(620,850,1536,20);
 ground.addImage(g);
 ground.velocityX = -2;
 ground.scale = 6;

 grass = createSprite(720,20,1600,10);
 grass.addImage(Grassimg);
 grass.velocityX = -2;
 grass.scale = 0.7
 
 BatGroup = createGroup();
 TreeGroup = createGroup();


}

function draw() {
  background("black");


if(Gamestate === "Play"){
 

  Obstacle();  
  Enemy();
if(keyDown(UP_ARROW)){
bird.velocityY = -3
}
if(keyDown(DOWN_ARROW)){
  bird.velocityY = 3
  }


if (ground.x < 60){
ground.x = ground.width/2;
  }

  if (grass.x < 300){
    grass.x = 720;
      }

  //console.log(ground.x);

  bird.VelocityY = 0;
  edges = createEdgeSprites();
  bird.bounceOff(edges);

  if(bird.isTouching(TreeGroup)){
    Gamestate = "End";
  }
  if(bird.isTouching(BatGroup)){
    Gamestate = "End";
  }
}
if(Gamestate === "End"){
  text("You lost. try again",500,200);

}

  

//bird.velocityY = bird.velocityY+0.05
 
  drawSprites();
  
}
function Obstacle(){

  if(World.frameCount % r1 === 0){
  var obstacles = createSprite(1300,600,100,10);
  obstacles.velocityX = -3
  obstacles.scale = 0.3;
  var rand =Math.round( random(1,4));
  //obstacles.addImage(ob+);
 switch(rand){
   case 1:obstacles.addImage(Ob1img);
   break;
   case 2:obstacles.addImage(Ob2img);
   break;
   case 3:obstacles.addImage(Ob3img);
   break;
   case 4:obstacles.addImage(Ob4img);
   break;
   ;
 }
 obstacles.debug = true;
 TreeGroup.add(obstacles);
  //obstacles.height = rand;
  //obstacles.scale = 0.5;
  }
 
}
function Enemy(){

  if(World.frameCount % Math.round(random(150,200)) === 0){
    var bat = createSprite(1300,Math.round(random(200,400)),10,10);
    bat.addImage(Batimg);
    bat.velocityX = -3;
    bat.scale = 1.2
    bat.debug = true;
    BatGroup.add(bat)
  }
}
