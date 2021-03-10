var b1,enemy;
var enemyGroup,bulletGroup,coinGroup;
var coinsCollected = 0;

//Function load the images 
function preload(){

	//Loading Images And Sounds

	//images
	bg1 = loadImage("i&s/background2.png");
	Jet1 = loadImage("i&s/ourJet.png");
	Jet2 = loadImage("i&s/eneJet.png");
	bullet1 = loadImage("i&s/ourBullet.png");
	bullet2 = loadImage("i&s/oppBullet.png");
	plives = loadImage("i&s/lives.png");
	gameOverimg = loadImage("i&s/gameOver.png");
	coinImg = loadImage("i&s/coin.png")

	//sounds
	/*shootSound1.loadSound("i&s/shootSound.mp3");
	lifeLost.loadSound("i&s/loseLife.mp3");
	bgSound1.loadImage("i&s/bgSound.mp3");
*/
}

function setup(){
createCanvas(1000,1200)

bg = createSprite(0,0,2000,2400);
bg.addImage(bg1)
bg.scale=10
bg.velocityY=5

edge1 = createSprite(10,200,20,1700);
edge1.visible=false;
edge2 = createSprite(990,200,20,1700);
edge2.visible = false;


	
player = createSprite(500,900,20,20);
player.addImage(Jet1)


bulletGroup = new Group();
enemyGroup = new Group();
coinGroup = new Group();
}
function draw(){
	background(bg1);
	player.collide(edge1);
	player.collide(edge2);
	if (bg.y > 800){
		bg.y=0
	}
	if (keyDown("right")){
		player.velocityX=5
	}
	if (keyDown("left")){
		player.velocityX=-5
	}
	if(keyDown("space")){
		b1 = createSprite(0,850,20,20);
		b1.x = player.x
		b1.addImage(bullet1);
		b1.velocityY=-4
		b1.scale=0.15
		bulletGroup.add(b1)
	}
	if (enemyGroup.isTouching(bulletGroup)){
		enemy.destroy();
		bulletGroup.destroyEach()
	}
	if (player.isTouching(coinGroup)){
		coinGroup.destroy();
		coinsCollected = coinsCollected + 1 
	}
	spawnEnemy();
	spawnCoins();
	drawSprites();
}
function spawnEnemy(){
	if (frameCount % 150 === 0){
		enemy = createSprite(500,100,20,20);
		enemy.x = Math.round(random(100,900))
		enemy.scale=0.3
		enemy.addImage(Jet2);
		enemy.velocityY=5
		enemyGroup.add(enemy)
	}
}
function spawnCoins(){
	if (frameCount % 100 === 0 ){
		coin1 = createSprite(500,100,20,20);
		coin1.scale=0.3
		coin1.x = Math.round(random(100,900))
		coin1.addImage(coinImg);
		coin1.velocityY = 3
		coinGroup.add(coin1);
	}
}