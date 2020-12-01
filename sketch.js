
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var dustpanSideL
var dustpanSideR
var dustpanSideBottom

var paperObject

var floor

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paperObject=new paper(200,300,20)
groundObject=new ground(width/2,690,width,20)
dustpanSideL = new bin(770,600,20,130)
dustpanSideR = new bin(630,600,20,130)
dustpanSideBottom = new bin(700,670,150,20)
  
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  paperObject.dubug = true

 
  paperObject.display();
  groundObject.display();
  dustpanSideBottom.display();
  dustpanSideL.display();
  dustpanSideR.display();
  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
    // Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
    // Matter.Body.applyForce(paperObject,{x:85,y:-85})
  //  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-70})
  // paperObject.velocityY = -7


	}
}



