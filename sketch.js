var bg
var spacecraft, spacecraft1, spacecraft2, spacecraft3, spacecraft4
var iss, shipImg
var hasDocked

function preload() {
  bg = loadImage("space.jpeg")
  shipImg = loadImage("spacecraft.png")
  spacecraft1 = loadImage("spacecraft1.png")
  spacecraft2 = loadImage("spacecraft2.png")
  spacecraft3 = loadImage("spacecraft3.png")
  spacecraft4 = loadImage("spacecraft4.png")

}

function setup() {
  createCanvas(800, 400);

  iss = createSprite(400, 100, 50, 50);

  iss.addImage(shipImg)
  iss.scale = 0.3

  spacecraft = createSprite(400, 400, 50, 50)

  spacecraft.x = random(200, 600)
  spacecraft.y = random(150, 250)
  spacecraft.addImage(spacecraft1)
  spacecraft.scale = 0.25

}

function rightArrow() {

  if (keyDown(RIGHT_ARROW)) {
    spacecraft.addImage(spacecraft3)
    spacecraft.changeImage(spacecraft3)
    spacecraft.x += 2
  }
}

function leftArrow() {

  if (keyDown(LEFT_ARROW)) {
    spacecraft.addImage(spacecraft4)
    spacecraft.changeImage(spacecraft4)
    spacecraft.x -= 2
  }
}

function downArrow() {

  if (keyDown(DOWN_ARROW)) {
    spacecraft.addImage(spacecraft1)
    spacecraft.changeImage(spacecraft1)
    spacecraft.y += 2
  }
}

function upArrow() {

  if (keyDown(UP_ARROW)) {
    spacecraft.addImage(spacecraft2)
    spacecraft.changeImage(spacecraft2)
    spacecraft.y -= 2
  }
}



function draw() {
  background(bg);
  drawSprites();
  console.log(spacecraft.x, spacecraft.y)
  rightArrow()
  leftArrow()
  downArrow()
  upArrow()

  if (spacecraft.x === 403 && spacecraft.y === 248) {
    stroke("white")
    textSize(34)
    text("Docking Sucseful", 350, 375)
  }
}