//create a class for Base
class Base{
//create the constructor
constructor(x, y, w, h){
//declare behaviour
var options = {
isStatic : true
};
//define properties
this.x = x;
this.y = y;
this.w = w;
this.h = h;
//create a body for each object
this.body = Bodies.rectangle(x, y, w, h, options);
//add each and every object into World
World.add(world, this.body);
}
//function to display the objects
display(){
//function to store new values
push();
//set a specific size for the outline of the object
strokeWeight(this.h / 10);
//set a specific color for the outline of the object
stroke("yellow");
//set a specific color to fill the objects
fill("red")
//create a specific shape's blueprint
rect(this.x, this.y, this.w, this.h);
//function to revert back to old settings
pop();
}
}