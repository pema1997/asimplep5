var r, g, b; 

function setup() {
 	createCanvas(600, 400);
    r = random(255);
    g = random(255);
    b = random(255);          
}
function draw() {
  // put drawing code here 
    background(r, g, b);
    //set size of text on mouse position
    textSize(mouseX/10);
   //if over 30 change color of fill and content of text
    if (textSize() > 30){
        fill('blue');
        myText = "Hello!";
            } else{
        fill('black');
        myText = "Hello there?";    
    }
    //set font
    textFont("Georgia");
    
    text(myText, 50, 120);
    
}

function keyPressed(){
    r = random(250);
    g = random(250);
    b = random(250); 
    background(r, g, b);
    if (keyCode === LEFT_ARROW) {
        r = 0;
        g = 0;
        b = 0;
    }
}