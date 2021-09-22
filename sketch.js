//declare constants from matter.js
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//declare variables for objects, arrays, images, sounds, etc.
var ground, groundImage;
var bridge, bridgeImage;
var wall1, wall1Image, wall2, wall2Image;
var zombie, zombieImage;
var joinPoint;
var jointLink;
var breakButton;
var stones = [];
var stone1, stone2, stone3;
var stone4, stone5, stone6;

//function to preload images, sounds, animations, JSON, gifs, etc.
function preload(){
//preload the image for backgound
groundImage  = loadImage("./zombie-crush-assets-main/assets/background.png");
//preload the image for zombie
zombieImage = loadImage("./zombie-crush-assets-main/assets/zombie.png");
}

//function to setup the game
function setup() {
//create the canvas of required size
createCanvas(windowWidth, windowHeight);
//create the engine
engine = Engine.create();
//add world to engine
world = engine.world;
//set a specific frameRate
frameRate(80);
//create ground
ground = new Base(0, windowHeight - 50, windowWidth, 30);
//create wall1
wall1 = new Base(25, 400, 100, 200);
//create wall2
wall2 = new Base(1225, 400, 100, 200);
//create bridge
bridge = new Bridge(28, {x : 125, y : 400});
//declare bahaviour of joinPoint
var point_options = {
//define behaviour of joinPoint
density : 0.001
};
//create a joinPoint
joinPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", point_options);

//add joinPoint with body of bridge
Matter.Composite.add(bridge.body, wall2)
//creare a jointLink
jointLink = new Link(bridge, wall2);

//create zombie
zombie = createSprite(width / 2, height - 110);
zombie.addImage(zombieImage);
zombie.scale = 0.1;
zombie.velocityX = 10;

stone1 = new Stone(200, 200, 30, 30);

breakButton = createButton("");
breakButton = createImg("./zombie-crush-assets-main/assets/axe.png");
breakButton.position(width - 200, height / 2 - 50);
breakButton.size(50, 50);
breakButton.class("breakbutton");
breakButton.mousePressed(bridgeBreak);

imageMode(CENTER);
}

//function to draw the objects
function draw() {
//set the background of required color
background(51);
image(groundImage, width / 2, height / 2, width, height);
//update the engine
Engine.update(engine);

/*//create a for loop to show the balls
for (var i = 0; i <= 8; i++){
//declare xPosition
var x = random(width / 2 - 200, width / 2 + 300);
//declare yPosition
var y = random(-10, 140);
//declare stone
var stone = new Stone(x, y, 80, 80);
//push object 
stones.push(stone);
}*/

//display ground
ground.display();
//display bridge
bridge.show();
//display wall1
wall1.display();
//display wall2
wall2.display();
//display stone1
stone1.display();

drawSprites();
}

/*//function to drop the object 
function handleButtonPress(){
joinLink.detach();
setTimeout(()=>{
bridge.break();
}, 1500)
}*/

function bridgeBreak(){
bridge.break();
jointLink.dettach();
jointlink = null;
}