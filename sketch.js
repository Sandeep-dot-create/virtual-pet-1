//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var database;
function preload()
{
	dog = loadImage("images/dogImg.png");
  dog1 = loadImage("images/dogImg1.png");
}

function setup() {
 
	createCanvas(500, 500);
 dog = createSprite(250,350,10,60);
dog.addImage(dogImg);
dog.scale = 0.2;


  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
writeStock(foodS);

}
  drawSprites();
  
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })
}
