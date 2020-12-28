
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var engine, world;
var ground, ball;
var d1, d2, d3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
    engine = Engine.create();
	world = engine.world;
	ball = new Paper(100, 370, 10, 10);
	d1 = new Dustbin(650, 380, 150, 10);
	d2 = new Dustbin(580, 345, 15, 80);
	d3 = new Dustbin(720, 345, 15, 80);
	var options={

		'isStatic' : true
   
		
	}
	ground = Bodies.rectangle(width/2, 390, width, 10, options);
	World.add(world, ground);

	

     
	
  
}


function draw() {
  background("cyan");
  ground.shapeColor = "yellow";  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 10);
  ball.display();
  d1.display(); 
  d2.display();
  d3.display();
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
  
	}
}


