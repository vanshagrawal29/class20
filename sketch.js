var rect ,rect2
function setup() {
  createCanvas(800,400);
  rect=createSprite(400, 200, 100, 50);
  rect2=createSprite(400, 200, 50, 50);
  rect.shapeColor = "white"
  rect2.shapeColor = "white"
}

function draw() {
  background(0);  
  if (rect.x - rect2.x<rect.width/2 + rect2.width/2 &&
    rect2.x - rect.x<rect.width/2 + rect2.width/2 && 
    rect.y - rect2.y<rect.height/2 + rect2.height/2 &&
    rect2.y - rect.y<rect.height/2 + rect2.height/2){
      rect.shapeColor = "red"
      rect2.shapeColor = "red"
  }
  else {
    rect.shapeColor = "white"
    rect2.shapeColor = "white"
  }
  rect.y = mouseY
  rect.x = mouseX
  drawSprites();
}