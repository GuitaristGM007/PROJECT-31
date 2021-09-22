//create a class for Link
class Link{
//create the constructor
constructor(bodyA, bodyB){
//declare lastLink
var lastLink = bodyA.body.bodies.length - 2;
//create a constraint for links
this.link = Constraint.create({
//assign bodyA
bodyA : bodyA.body.bodies[lastLink],
//define pointA
pointA : {x : 0, y : 0},
//assign bodyB 
bodyB : bodyB.body,
//define pointB
pointB : {x : 0, y : 0},
//define length
length : 10,
//define stiffness
stiffness : 0.8
});
//add the objects into World
World.add(world, this.link);
}
dettach()
    {
      World.remove(engine.world,this.link);
     
    }
}