const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

function setup() {
  createCanvas(480,800);

  base = new Ground(240,750,480,30)

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  //Engine.update(engine);
  


  drawSprites();
}

