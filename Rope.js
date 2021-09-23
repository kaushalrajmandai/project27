Class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetx = offsetX;
        this.offsety = offsety;
        var op = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetx , y:this.offsety}
    }


    this.rope = Matter.Constraint.create(op);
    World.add(world, this.rope);
    }
    display() {
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

    strokeWeight(2);
     
    var Anchor1x = point1.x;
    var Anchor1y = pointi.y;

    var Anchor2X = point2.x + this.offsetX;
    var Anchor 2Y = point2.y + this.offsetY;

    line (Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

    }
}