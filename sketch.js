var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  fixedRect = createSprite(300,100,50,100);
  fixedRect.debug = true;
  fixedRect.shapeColor = "green";

  movingRect = createSprite(250,100,50,100);
  movingRect.debug = true;
  movingRect.shapeColor = "green";
}


function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + fixedRect.height/2){

      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }

    else{
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }


  drawSprites();
}