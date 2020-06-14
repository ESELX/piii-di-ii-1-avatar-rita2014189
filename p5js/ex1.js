//Variáveis tipo let nomeDaVar;
let posX, posY;
let velX, velY;
let padWidth, padHeight;
let diamBall;
let points;
let vel;

function setup() { //código que só corre uma vez
  createCanvas(600, 600);
  posX = random(width);
  posY = 30;
  vel = 5;
  velX = vel;
  velY = vel;
  padWidth = 80;
  padHeight = 8;
  diamBall = 15;
  points=0;
}
  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
 background(0,100,100);
  fill(255, 204, 0);
  noStroke();
  text(points,10,20);
  
  posX = posX + velX;
  posY = posY + velY;
  
  fill(51);
  noStroke();
  ellipse(posX,posY,diamBall);
  
  noFill();
  stroke(255, 204, 0);
  strokeWeight(4);
  rectMode(CENTER);
  
  rect(mouseX,height-10,padWidth,padHeight);
  


  //calcula
  if (posX-diamBall/2 <= 0 || posX+diamBall/2 >= width) {
    velX = velX*-1;
  }
  if (posY-diamBall/2 <= 0) {
    velY = velY*-1;
  }

  if (posY+diamBall/2 >= height){
    print("Loser");
    velX = 0;
    velY = 0;
    points = "Loser!";
  }

  if (velX != 0 && posX >= mouseX-padWidth/2 && posX <= mouseX+padWidth/2 && posY+diamBall/2 >= height-10-padHeight/2){
    velY = -random(vel-3,vel);
    velX =random(-vel,vel);
    points++;
  } 


}

  
