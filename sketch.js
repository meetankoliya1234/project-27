
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new paper(200,200,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 bobObject1.display();
  // drawSprites();
 
}



