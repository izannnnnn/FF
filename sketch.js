
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boton;
var angle = 77;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }


  boton = createImg("up.png")
  boton.position(350,30)
  boton.size(50,50)
  boton.mouseClicked(Force)
   
   var ground_options ={
     isStatic: true
   };

   
  
 
 
  palo = Bodies.rectangle(100,350,60,10, ground_options)
  World.add(world,palo)

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  
}



function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(palo,angle);
  push();
  translate(palo.position.x,palo.position.y);
  rotate(angle);
  rect(0,0,60,10);
  pop();
  angle +=0.1;
 
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

function Force()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  