class Ground
{
    constructor(x, y, w, h, colour)
    {
        let options = {
            isStatic:true
        };
        
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
        this.colour = colour

    }

    show() {
        var pos = this.body.position
        fill(this.colour)
        rectMode(CENTER)
        rect(pos.x, pos.y, this.w, this.h)
    
    
    }


}

