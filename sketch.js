var canvas;

var name1, email, age, gender, continuebutton;
var y1, y2, y3, y4;

function setup(){

  canvas = createCanvas(400, 400);

  name1 = createInput('name');
  name1.position(100, 85);

  age = createInput('age');
  age.position(100, 105);

  gender = createInput('gender (male/female)');
  gender.position(100, 125);

  email = createInput('email Id');
  email.position(100, 145);

  continuebutton = createButton('continue');
  continuebutton.position(140, 185);
  
}

function draw(){

  background(0, 255, 237);
  
  text("Enter your......", 110, 70)

  continuebutton.mousePressed(function(){

    fill(0, 255, 237);

    name1.hide();

    age.hide();
    
    gender.hide();
    
    email.hide();
    
    continuebutton.hide();

    y1 = createInput('yes/no');
    y1.position(22, 63);

    y2 = createInput('yes/no');
    y2.position(22, 145);

    y3 = createInput('yes/no');
    y3.position(22, 227);

    y4 = createInput('yes/no');
    y4.position(22, 310);

    text ('hello', 10, 10);

  })
 
}    