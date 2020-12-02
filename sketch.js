//Create variables here
var  dog,dogImage,happyDogImage, happyDog, database, foodS, foodStock;
function preload()
{

  //load images here
  dogImage=loadImage("dog.png")
happyDogImage=loadImage("happydog.png")

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200,2,2)
dog.addImage(dogImage);
dog.scale=0.2;

}


function draw() {  
background (46,139,87)

if(keyWentDown(UP_ARROW)){
writeStocks(foodS);
happyDogs.addImage(happyDogImage);
}
  dog.display();
  drawSprites();
  //add styles here
 
  textSize(20);
  text ("NOTE:press up arrow to feed dog");
  
}

function foodStock(){
foodStock=database.red('FoodS')
foodStock.on ("value",readStock)
}


function readStock(){



}

