
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var block1,block2,block3,ground;

function preload()
{
	
}

function setup() 
{
	
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	block1=new Block(700,320,50,50);
	block1.addColor("red")
	block2=new Block();
	block3=new Block();
	ground=new Block(600,height,1000,20);
	

	Engine.run(engine);

}


function draw() {
  background(180);
engine.update(engine);

  box1.display();
  ground.display();
  
  drawSprites();
 
}



