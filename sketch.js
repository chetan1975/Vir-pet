//Create variables here
var database;
var  dog, happyDog, foodS, foodStock,lastFed
var dogImg,happyDogImg
function preload()
{
  //load images here
  
  dogImg =loadImage("images/dogImg.png");

  happyDogImg =loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,300,40,40);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
   foodStock.on("value",readStock)
}


function draw() {  
  background(rgb(46,139,87))

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg)
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({

    Food : x
  })
}