const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground
var ball
var player

function preload() {

    backgroundIMG = loadImage("background.png")


}


function setup() {
    createCanvas(windowWidth, windowHeight - 5)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(windowWidth / 2, windowHeight - 10, windowWidth + 10, 55, "brown")
    platform1 = new Platform(500, windowHeight - 100, 100, 10, "green")

    player = new PixelPlayer(100, 50);
}



function draw() {
    background(backgroundIMG);

    Engine.update(engine)
    ground.show();
    platform1.show();
    player.refreshPosition()
    player.display();

    jump()


    drawSprites();
}

function jump() {
    var collision = Matter.SAT.collides(player.body, platform1.body)
    if (collision.collide) {
        player.jumping = false
    }
}