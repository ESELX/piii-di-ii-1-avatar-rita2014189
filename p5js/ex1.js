//Variáveis tipo let nomeDaVar;
let numDiv;

function setup() { //código que só corre uma vez
  
createCanvas(640, 480);
  
  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

function draw() { //código que corre em loop
 //desenha
   background(200, 220, 260);
  numDiv = 10;//map(mouseX,0,width,5,50);
 

  
//head  
fill(254, 129, 161);
noStroke();
rect(200, 50, 250,200, 260); 
  
//hair
noStroke(); 
fill(254, 110, 200 );
ellipse(245 ,46,40,40);
fill(254 ,130, 200);
ellipse(276 ,38,40,40); 
  fill(254, 110, 200 );
ellipse(310 ,35,40,40); 
  fill(254 ,130, 200);
ellipse(340 ,35,40,40);
  fill(254, 110, 200 );
ellipse(370 ,37,40,40); 
  fill(254 ,130, 200);
ellipse(400 ,44,40,40);
  
//face
fill(181,200,255 ); 
ellipse(410, 170, 50, 50); 
ellipse(240, 170, 50, 50); 
  
//ears  
fill(254, 129, 161);
ellipse(462, 150, 30, 50); 
ellipse(188, 150, 30, 50); 
  
 //eyes
fill(181,20,285);
ellipse(290, 100, 50, 20); 
ellipse(350, 100, 50, 20); 
  
fill(181,270,255);  
ellipse(290, 100, 15, 35); 
ellipse(350, 100, 15, 35); 

//mouth
fill(192, 4, 52 ); 
ellipse(325 ,200,30, 50, 335,170 ); 
  
  
  
  
//body  
fill(181,20,285); 
ellipse(325, 345, 170, 200)
  
noStroke();
fill(181,20,285 );
ellipse(253,270,60,20); 


noStroke();
fill(181,20,285);
ellipse(400 ,270,60,20); 

noStroke();
fill(181,20,285 );
ellipse(280,450,45,35);
ellipse(370,450,45,35);
  


} 
for (i = 0; i < numDiv-1; i++){
    for (j = 0; j <numDiv-1; j++){
      ellipse((i+1)*width/numDiv,(j+1)*height/numDiv, 15);

    }
  }

