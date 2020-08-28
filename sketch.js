
var car,car2, car3, car4, wall, deformation,deformation2,deformation3,deformation4;
var speed,speed2,speed3,speed4, weight,weight2,weight3,weight4;
function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 75, 50, 10);
  car2 = createSprite(50, 150, 50, 10);
  car3 = createSprite(50,225,50,10);
  car4 = createSprite(50,300,50,10);

  wall = createSprite(1150,200,60,height/2);
wall.visible = false;

speed = Math.round(random(55,90));
speed2 = Math.round(random(55,90));
speed3 = Math.round(random(55,90));
speed4 = Math.round(random(55,90));
weight = Math.round(random(400,1500));
weight2 = Math.round(random(400,1500));
weight3 = Math.round(random(400,1500));
weight4 = Math.round(random(400,1500));

}

function draw() {
  background(0,0,0);  

  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2){
   car.velocityX = 0;

   var deformation = 0.5*weight*speed*speed/22500;
   if(deformation>180){
     car.shapeColor = "red";
   }
    if(deformation<180 && deformation>100){
     car.shapeColour = color(230,230,0);
   }
    if(deformation<100){
     car.shapeColor = color(0,255,0);
   }
   
   car2.velocityX = speed;
  }


  if(wall.x-car2.x < (car2.width+wall.width)/2){
    car2.velocityX = 0;
 
    var deformation2 = 0.5*weight2*speed2*speed2/22500; 
    if(deformation2>180){
      car2.shapeColor = "red";
    }
     if(deformation2<180 && deformation2>100){
      car2.shapeColour =color(230,230,0);
    }
     if(deformation2<100){
      car2.shapeColor = color(0,255,0);
    }
    car3.velocityX = speed;
   }

   
   if(wall.x-car3.x < (car3.width+wall.width)/2){
    car3.velocityX = 0;
 
    var deformation3 = 0.5*weight3*speed3*speed3/22500; 
    if(deformation3>180){
      car3.shapeColor = color(255,0,0);
    }
     if(deformation3<180 && deformation3>100){
      car3.shapeColour = color(230,230,0);
    }
     if(deformation3<100){
      car3.shapeColor = color(0,255,0);
    }
    car4.velocityX = speed;
   }

   if(wall.x-car4.x < (car4.width+wall.width)/2){
    car4.velocityX = 0;
 
    var deformation4 = 0.5*weight4*speed4*speed4/22500; 
    if(deformation4>180){
      car4.shapeColor = color(255,0,0);
    }
     if(deformation4<180 && deformation4>100){
      car4.shapeColour = color(230,230,0);
    }
     if(deformation4<100){
      car4.shapeColor = color(0,255,0);
    }
   }
 
   drawSprites();
 }

