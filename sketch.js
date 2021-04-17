
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin1,dustbin2,dustbin3,ground,ball;
var dustbinImage,dust;
var edges;



function preload()
{
	dustbinImage= loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 400);



	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

ball=new Ball(100,370,15);
ground= new Ground(400,390,800,20);
dustbin1= new Dustbin(600,312.5,10,125);
dustbin2= new Dustbin(645,372,100,10);
dustbin3= new Dustbin(690,312.5,10,125);
dust = createSprite(645,313,10,10);
dust.addAnimation("t1",dustbinImage);
dust.scale=0.4;

}


function draw() {
  background(rgb(229, 229, 229));
  Engine.update(engine);
 ball.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 edges = createEdgeSprites();
 drawSprites();
 
}



function keyPressed(){
	if (keyCode === UP_ARROW){
	
	ball.bounce();
	}
	}

