
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ground =new Ground(width/2,height/1,1400,20);
	basket1=new Ground(width/1.5,height/1.2,10,200);
	basket2=new Ground(width/1.2,height/1.2,10,200);


	ball=Bodies.circle(100,200,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);

    rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {

  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  basket1.show();
  basket2.show();

  keypressed();
  drawSprites();
 
}

function keypressed(){

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0,},{x:1.5,y:0});
	}

}


