var jumping = false
var flying = false
var platforms
var level = 0
var deaths = 0

function preload() {
    bgImage = loadImage("background.png")
    playerImage = loadImage("PixelPlayer.png")
    portalImage = loadImage("Portal.png")
    playButtonImg = loadImage("startButton.png")
    spikes = loadImage("spikes.png")
    trampolineImg = loadImage("trampoline.png")
    menuScreen = loadImage("menuScreen.png")
}
function setup() {
    createCanvas(windowWidth, windowHeight - 20)
    gameState = 4

    platforms = new Group()

    player = createSprite(100, 500)
    player.addImage(playerImage)
    player.setCollider("circle", 0, 0, 60)

    ground = createSprite(width / 2, height - 20, width, 20)
    ground.visible = false

    platform1 = createSprite(width - 200, height - 200, 300, 20)
    platform1.shapeColor = "green"

    platform2 = createSprite(width / 2 + 300, height / 2 + 200, 300, 20)
    platform2.shapeColor = "green"

    platform3 = createSprite(width / 3 + 100, height / 2, 300, 20)
    platform3.shapeColor = "green"

    platform4 = createSprite(width / 2 + 300, height / 2 - 200, 300, 20)
    platform4.shapeColor = "green"

    portal = createSprite(width / 2 + 470, height / 2 - 290)
    portal.addImage(portalImage)
    portal.scale = 0.3

    playButton = createSprite(width / 2 - 100, height / 2)
    playButton.addImage(playButtonImg)

    spike1 = createSprite(150, height - 125)
    spike1.addImage(spikes)
    spike1.scale = 0.7

    spike2 = createSprite(width / 2 - 50, height - 125)
    spike2.addImage(spikes)
    spike2.scale = 0.7

    spike3 = createSprite(width / 2 + 500, height - 125)
    spike3.addImage(spikes)
    spike3.scale = 0.7

    trampoline = createSprite(width / 2, height - 100)
    trampoline.addImage(trampolineImg)
    trampoline.scale = 0.5
}
function draw() {

    if (gameState == 0) {
        background(menuScreen)

        playButton.visible = true
        player.visible = false
        platform1.visible = false
        platform2.visible = false
        platform3.visible = false
        platform4.visible = false
        portal.visible = false
        spike1.visible = false
        spike2.visible = false
        spike3.visible = false
        trampoline.visible = false

        if (mousePressedOver(playButton)) {
            gameState = 1
            level = 1
        }

        drawSprites()
    }

    if (gameState == 1) {

        playButton.visible = false
        player.visible = true
        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true
        portal.visible = true
        spike1.visible = false
        spike2.visible = false
        spike3.visible = false
        trampoline.visible = false

        background(bgImage)

        fill("Black")
        textSize(40)
        text("Level: " + level, 70, 70)
        text("Deaths: " + deaths, 70, 120)

        if (keyDown("UP_ARROW") && jumping == false) {
            jumping = true
            player.velocityY = -20
        }
        player.velocityY += 1
        player.velocityX = 0

        if (keyDown("LEFT_ARROW")) {
            player.velocityX = -10
            player.rotation -= 15
        }

        if (keyDown("RIGHT_ARROW")) {
            player.velocityX = 10
            player.rotation += 15
        }
        drawSprites()
        if (player.collide(ground) || player.collide(platform1) || player.collide(platform2) || player.collide(platform3) || player.collide(platform4)) {
            jumping = false
        }
        if (player.isTouching(portal)) {
            player.x = 400
            player.y = 500
            gameState = 2
            level = 2
        }
    }
    if (gameState == 2) {

        playButton.visible = false
        player.visible = true
        platform1.visible = true
        platform2.visible = true
        platform3.visible = true
        platform4.visible = true
        portal.visible = true
        spike1.visible = true
        spike2.visible = true
        spike3.visible = true
        trampoline.visible = false

        background(bgImage)

        fill("Black")
        textSize(40)
        text("Level: " + level, 70, 70)
        text("Deaths: " + deaths, 70, 120)

        platform1.x = width / 3 - 80
        platform2.x = width / 2 + 300
        platform2.y = height - 200
        platform3.x = width / 2 + 300
        platform3.y = height - 400
        platform4.x = width / 2 + 300
        platform4.y = height - 600

        if (keyDown("UP_ARROW") && jumping == false) {
            jumping = true
            player.velocityY = -20
        }
        player.velocityY += 1
        player.velocityX = 0

        if (keyDown("LEFT_ARROW")) {
            player.velocityX = -10
            player.rotation -= 15
        }

        if (keyDown("RIGHT_ARROW")) {
            player.velocityX = 10
            player.rotation += 15
        }
        drawSprites()
        if (player.collide(ground) || player.collide(platform1) || player.collide(platform2) || player.collide(platform3) || player.collide(platform4)) {
            jumping = false
        }
        if (player.collide(spike1) || player.collide(spike2) || player.collide(spike3)) {
            deaths += 1
            player.x = 500
            player.y = 500
        }
        if (deaths >= 5) {
            gameState = "end"
        }

        if (player.isTouching(portal)) {
            player.x = width / 2 - 300
            player.y = 500
            level = 3
            gameState = 3
        }
        drawSprites()
    }
    if (gameState === 3) {
        playButton.visible = false
        player.visible = true
        platform1.visible = false
        platform2.visible = false
        platform3.visible = false
        platform4.visible = true
        portal.visible = true
        spike1.visible = true
        spike2.visible = true
        spike3.visible = true
        trampoline.visible = true

        background(bgImage)

        fill("Black")
        textSize(40)
        text("Level: " + level, 70, 70)
        text("Deaths: " + deaths, 70, 120)

        platform4.x = width / 2 + 300
        platform4.y = height / 2 - 100
        platform3.x = width + 300
        platform3.y = height + 100
        platform2.x = width + 300
        platform2.y = height / 2 - 600
        platform1.x = width + 300
        platform1.y = height / 2 - 600

        spike1.x = 700
        spike1.y = height - 100
        spike1.scale = 0.5
        spike2.x = 10000
        spike3.x = 1500

        if (keyDown("UP_ARROW") && jumping == false) {
            jumping = true
            player.velocityY = -20
        }
        player.velocityY += 1
        player.velocityX = 0

        if (keyDown("LEFT_ARROW")) {
            player.velocityX = -10
            player.rotation -= 15
        }

        if (keyDown("RIGHT_ARROW")) {
            player.velocityX = 10
            player.rotation += 15
        }
        if (player.isTouching(trampoline)) {
            player.velocityY = -35
        }
        drawSprites()
        if (player.collide(ground) || player.collide(platform1) || player.collide(platform2) || player.collide(platform3) || player.collide(platform4)) {
            jumping = false
        }
        if (player.collide(spike1) || player.collide(spike2) || player.collide(spike3)) {
            deaths += 1
            player.x = 500
            player.y = 500
        }
        if (deaths >= 5) {
            gameState = "end"
        }

        if (player.isTouching(portal)) {
            gameState = 4
        }
        drawSprites()
    }

    if (gameState === 4) {
        playButton.visible = false
        player.visible = true
        platform1.visible = false
        platform2.visible = false
        platform3.visible = false
        platform4.visible = false
        portal.visible = true
        spike1.visible = true
        spike2.visible = true
        spike3.visible = true
        trampoline.visible = true

        background(bgImage)

        fill("Black")
        textSize(40)
        text("Level: " + level, 70, 70)
        text("Deaths: " + deaths, 70, 120)

        platform4.x = width + 300
        platform4.y = height / 2 - 100
        platform3.x = width + 300
        platform3.y = height + 100
        platform2.x = width + 300
        platform2.y = height / 2 - 600
        platform1.x = width + 300
        platform1.y = height / 2 - 600

        spike1.x = 700
        spike1.y = height - 100
        spike1.scale = 0.5
        spike2.x = 10000
        spike3.x = 1500


        if (keyIsDown(UP_ARROW)) {
            if (flying == true) {
                player.velocityY = player.velocityY * -1
            } else {
                player.velocityX = 10
                player.velocityY = -10
                flying = true
            }
        }

        /*if(mouseDown(LEFT)){
            flying = !flying
        }
        if (flying == true) {
            player.velocityY = player.velocityY * -1
        }else{
            player.velocityX = 10
            player.velocityY = -10
        }*/
        if (player.collide(spike1) || player.collide(spike2) || player.collide(spike3)) {
            deaths += 1
            player.x = 500
            player.y = 500
        }
        if (deaths >= 5) {
            gameState = "end"
        }

        if (player.isTouching(portal)) {
            gameState = "finished"
        }
        drawSprites()
    }
    if (gameState === "end") {

    }
}


