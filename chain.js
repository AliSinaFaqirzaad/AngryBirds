class Chain {
    
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.4,

            //length/distance between the two objects when they are not moving
            length:10
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        
    }

    display(){
        var pointA = this.chain.bodyA.position;//bird
        var pointB = this.chain.bodyB.position;//log6
        push();
        //line(x1,y1,x2,y2);
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }

}