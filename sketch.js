//The setup function only happens once
var sandy=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(280,116,mouseX); //an RGB color for the canvas' background
  
//circle
  stroke(355,285,137); // an RGB color for the circle's border
  fill(455,466,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20); // center of canvas, 20px dia
stroke(55,178,205);
strokeWeight(5);
fill(261,187,200);
rect(sandy,220,340,sandy,sandy);
sandy=sandy+1;
  }



  if (sandy>=100)
    {sandy=0;}
  else
    {sandy=sandy+1;}

