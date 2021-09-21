var path , backgroundImg;
var dora , doraImg
var mouse , mouseImg , mouseG
var doras ,dorasImg
var cake , cakeImg , cakeG
var coin , coinImg , coinG
var invisibleG
var gameState = "play"
var score;
var points;

function preload(){
backgroundImg = loadImage("bg.jpg")
doraImg = loadAnimation("doraemonw.png" , "doraemonw.png" , "doraw.png" , "doraw.png")
mouseImg = loadImage("3012.png")
dorasImg = loadAnimation("doraS.png")
cakeImg = loadImage("cake.png")
coinImg = loadImage("coin.png")


cakeG = new Group()
mouseG = new Group()
coinG = new Group()
}

function setup() {
 createCanvas(700,700)
 path = createSprite(689,260)
 path.addImage("back" , backgroundImg)
 path.scale = 1.8

 dora = createSprite(100,500)
 dora.addAnimation("doraem" , doraImg)
 
dora.scale = 1.29

invisibleG = createSprite(200,660,1000,80);
invisibleG.visible = false;

score = 0;
points = 0;
}

function draw() {
background("grey")

if (gameState == "play" )  {
    
    path.velocityX = -4
    if (path.x < 0){
          path.x = path.width/2;
      }

      

     path.velocityX = -(4 + 3* score/100)
     score = score + Math.round(getFrameRate()/60);

     
    
      if(keyDown("space")) {
     dora.velocityY = -10
    
      }
     
      dora.velocityY = dora.velocityY + 0.9;

    if(cakeG.isTouching(dora)) {
     cakeG.destroyEach()
     points = points+40
    }
    if(coinG.isTouching(dora)) {
        coinG.destroyEach()
        points = points+30

       }

       if(mouseG.isTouching(dora)) {
           dora.destroy()
           coinG.destroy()
           cakeG.destroy()
           
      gameState == "end"

      
       }
       

      spawnMouse()
      spawnCake()
      spawnCoin()

     
     drawSprites()
     textSize(30)
     text("Distance: "+ score, 10,50);
     text("Score:" + points,10,80)
    
}


 dora.collide(invisibleG);

 
}

function spawnMouse() {
if(frameCount % 320 == 0)  {
    mouse = createSprite(700,550);
    mouse.addImage("rat" , mouseImg)
    mouse.scale = 0.2;
    mouse.velocityX = -3
 mouse.lifetime = 800;
mouseG.add(mouse)   
}
 }

 function spawnCake() {
    if (frameCount % 230 === 0) {
        cake = createSprite(600,490,40,10);
        cake.y = Math.round(random(100,200));
        cake.addImage(cakeImg);
        cake.scale = 0.2;
        cake.velocityX = -4;
        
         
        cake.lifetime = 300;
        
        cake.depth = dora.depth;
        dora.depth = dora.depth + 1;
        
       
        cakeG.add(cake);
      
    }

 }

 function spawnCoin() {
    if (frameCount % 190 === 0) {
         coin = createSprite(600,590,40,10);
        coin.y = Math.round(random(300,400));
        coin.addImage(coinImg);
        coin.scale = 0.3;
        coin.velocityX = -4;
        
         //assign lifetime to the variable
         coin.lifetime = 200;
        
        //adjust the depth
        coin.depth = dora.depth;
        dora.depth = dora.depth + 1;
        
        //add each cloud to the group
        coinG.add(coin);
      }


 }
 

