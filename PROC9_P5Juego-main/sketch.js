var sprite
function setup() {
  createCanvas(400,400);
  sprite = createSprite(160,160,30,30)
}

function draw() 
{
  background(30);
drawSprites()
if (keyIsDown(LEFT_ARROW)){
  sprite.x -= 1
}
if (keyIsDown(RIGHT_ARROW)){
  sprite.x += 1
}
if (keyIsDown(UP_ARROW)){
  sprite.y -= 1
}
if (keyIsDown(DOWN_ARROW)){
  sprite.y += 1
}
}




