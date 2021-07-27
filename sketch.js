const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerPad = new playerBase(300,random(450,height - 300),180,150)
  computerPad = new computerBase(600,playerPad.position.y,180,150)
  player1 = new player(285,playerBase.body.position.y - 153,50,180)
  computerPlayer1 = new computerPlayer(545,player1.position.y,50,180) 

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  display(playerPad)
  display(computerPad)
  display(player1)
  display(computerPlayer1)

   //display Player and computerplayer


}
