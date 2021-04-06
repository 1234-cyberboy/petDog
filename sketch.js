var dog, happyDog, foodS, foodStock, normal;
var dataBase;
var FTP, addFood;
var fedTime, lastFed;
var foodObj;

function preload(){	
  happyDog = loadImage("images/dogImg1.png");
  normal = loadImage("images/dogImg.png");  
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(200,200,20,20);
  dog.addImage(normal);
  dataBase = firebase.database();
  foodStock = dataBase.ref('Food');
  foodStock.on("value", readStock);
  foodObj = new Food(20, hour());
  var feed;
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  var addFood;
  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods)
}


function draw() {  
  background(46, 139,87); 
  drawSprites();
  foodObj.display();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  dataBase.ref('/').update({
  Food:x
  })
}

function feedDog(){
  dog.addImage(happyDog);
  
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  foodObj.updateLastFed(hour());
  dataBase.ref('/').update({
    Food:foodOject.getFoodStock(),
    FeedTime:foodOject.getLastFed()})
}

function addFoods(){
  foodObj.addFoodStock();
  dataBase.ref('/').update({
    Food:foodOject.getFoodStock()})
}

