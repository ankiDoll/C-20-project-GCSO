var car,wall;
var speed,width;

function setup() {
  
  var canves =  createCanvas(1600,400);
  

  speed = Math.round(random(50,100));
  width = Math.round(random(400,1500));

   car = createSprite(400, 200, 50, 50);
   car.velocityX = speed;
   car.debug = true;

   wall = createSprite(1300,200,10,height/2);
   wall.shapeColor = color(80,80,80);
   wall.debug = true;

  
}

function draw() {
  background(255,200,200);  
  
  if(wall.x - car.x < (wall.width + car.width)/2){
    var deformation = (0.5 * width * speed * speed)/22500;
    car.velocityX = 0;
 
  if(deformation > 180){

    car.shapeColor = color(255,0,0);

 }

 if(deformation < 180 && deformation > 100){

  car.shapeColor = color(230,230,0);

}

if(deformation < 100){

  car.shapeColor = color(0,255,0);

}

}

  drawSprites();


  
}