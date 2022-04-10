var gameState = "start";





function preload() {
 logoImage = loadImage("images/logo.png");
 character_right = loadImage("images/character right.png");
 character_left = loadImage("images/character left.png");
 petImg = loadImage("images/pet.png");
 questBtn = loadImage("images/quest btn.png");
 questionImg = loadImage("images/question.png");


}

function setup() {
	createCanvas(windowWidth,windowHeight);
if(gameState == "start"){

start = createImg("images/start.png");
start.size(300,300);
start.position( windowWidth/2 - 150, windowHeight - 300);
start.mouseClicked(levelOneIntro);

logo = createSprite(windowWidth/2 - 10, windowHeight - 500);
logo.addImage(logoImage);
logo.scale = 5;


 ground = createSprite(windowWidth/2 + 10,windowHeight - 10, windowWidth);
 ground.visible = false;
 ground.shapeColor = "green";

 sun = createSprite(windowWidth/2 - 750,50);
 sun.visible = false;


player = createSprite(windowWidth/2 - 150,windowHeight - 60);
player.addImage(character_right);
player.scale = 3;
player.visible = false;

pet = createSprite(windowWidth/2 - 300, windowHeight - 80);
pet.scale = 3;
pet.addImage(petImg);
pet.visible = false;





}



}


function draw() {

	

	drawSprites();

	

}



function levelOneIntro(){
	background("skyBlue");
	start.remove();
	logo.visible = false;
	ground.visible = true;
	sun.visible = true;
	player.visible = true;
	pet.visible = true;

}