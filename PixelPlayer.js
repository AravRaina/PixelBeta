class PixelPlayer {
    constructor(x, y) {

        var options = {
            restitution: 0.9,
            density:0.05
        }
        this.x = x;
        this.y = y;
        this.r = 60;
        this.jumping = false

        this.pixel_image = loadImage("PixelPlayer.png");
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body)

    }

    refreshPosition(){
        this.x = this.body.position.x
        this.y = this.body.position.y
    }


    display() {
        var pos = this.body.position
        push()
        imageMode(CENTER)
        image(this.pixel_image, pos.x, pos.y, this.r * 2,this.r * 2  );
        pop()

        if(keyIsDown(RIGHT_ARROW)){
            
            Matter.Body.setPosition(this.body,{x:this.x+5, y:this.y})
        }

        if(keyIsDown(LEFT_ARROW)){
            
            Matter.Body.setPosition(this.body,{x:this.x-5, y:this.y})
        }

        if(keyIsDown(UP_ARROW) && this.jumping == false){
            Matter.Body.applyForce(this.body, {x:0, y:0}, {x:0, y:-0.05})
            this.jumping = true
        }
    }

}