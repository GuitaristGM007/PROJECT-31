//create a class for Stone
class Stone{
//create the constructor
constructor(x, y, w, h){
//declare behaviour
var options = {
//define behaviour
isStatic : false ,
density : 1.0
};
//define properties
this.x = x;
this.y = y;
this.w = w;
this.h = h;
//create a body for each object
this.body = Bodies.rectangle(x, y, w, h, options);
//add image to every object
this.image = loadImage("./assets/stone.png");
//add each and every object in the World
World.add(world, this.body);
}
//function to show the objects
display(){
//declare a sample variable
var place = this.body.position;
//declare angle
var angle = this.body.angle;
//function to store new values
push();
//set a specific size for the outline
translate(place.x, place.y);
//command to change the value of angle
rotate(angle);
//define imageMode
imageMode(CENTER);
//assign the image
image(this.image, 0, 0, this.w, this.h);
//function to revert back to old settings
pop();
}
}