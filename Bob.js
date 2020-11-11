class Bob {
    constructor(x, y, r)  {
        var options = {
            'friction':0.5,
            'density': 1.8
        }
       // this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
    
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        //ellipseMode(RADIUS);
        fill("pink");
        //imageMode(CENTER);
        //image(this.image,0,0, this.r, this.r);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop();
    }
}