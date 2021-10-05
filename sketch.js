
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(450,350,900,20)
  wall1 = new Wall(610,300,20,100);
	wall2 = new Wall(790,300,20,100);
	wall3 = new Wall(700,345,200,20);
  paper = new Paper();
	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  wall1.display();
	wall2.display();
  wall3.display();
  keyPressed()
  paper.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-3});
	
	}
}
