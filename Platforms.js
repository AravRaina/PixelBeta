class Platform{
    constructor(x, y, w, h, colour){
        this.body = createSprite(x,y,w,h)
        this.body.shapeColor = colour
        platforms.add(this.body)
    }

    disappear() {
        this.body.destroy()
    }

}
