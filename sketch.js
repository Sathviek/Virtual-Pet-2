var dog,dogImg,dogImg1,database;
var foodS,foodStock;

function preload()
{
  dogImg=loadImage("dogImg.png");
  dogImg1=loadImage("dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database=firbase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background('blue');
if(keyWentDown(UP_ARROW));

 
 
 
 
 
 
 
  drawSprites();


}



