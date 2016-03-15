
    var Enemy = function(x,y,speed) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.x = x;
        this.y = y;
        this.sprite = 'images/enemy-bug.png';
        this.speed=speed;
        };

    Enemy.prototype.update = function(dt) {
       //makes it so if it goes off the canvas it reappears 
       
      
     if (this.x>=505) {
        this.x=-85;
    }
    else this.x=this.x+(this.speed*dt);
    // console.log("Enemy is "+ this.x,this.y);
     
  };  
    //set enemy position  
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var enemy1 = new Enemy (100,240,400);
var enemy2 = new Enemy (200,160,300);
var enemy3 = new Enemy (0,60,205);
var allEnemies = [enemy1,enemy2,enemy3];
//var allEnemies = [];
//var enemy = function() {
    //for (var i=0; i<3; i++); {
    //enemy=new Enemy();
    //allEnemies.push();   
   //} 
//};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y,sprite) {
    
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
    
    };

    Player.prototype.reset = function() {
        
            this.x=200;
            this.y=430;            
    };

    Player.prototype.checkCollisions = function () {
        //for (var i=0; i < allEnemies.length; i++){
            //determine rows enemy1,2,3 can be on

//if (this.x > enemy1.x + 55 &&
   //this.x + 55 > enemy1.x &&
   //this.y < enemy1.y + 0 &&
   //171 + this.y > enemy1.y) {
    // collision detected!
   //} 
        
          if (this.x >= enemy1.x + 6 && 
        this.x < enemy1.x + 36 &&
        this.y >= enemy1.y + 6 &&
        this.y < enemy1.y + 36) 
            {
        
          console.log("Game over!");
         this.reset();
     }
     else if (this.x >= enemy2.x + 6 && 
        this.x < enemy2.x + 36 &&
        this.y >= enemy2.y + 6 &&
        this.y < enemy2.y + 36) 
            {
        
          console.log("Game over!");
         this.reset();
     }
     else if (this.x >= enemy3.x + 6 && 
        this.x < enemy3.x + 36 &&
        this.y >= enemy3.y + 6 &&
        this.y < enemy3.y + 36) 
            {
        
          console.log("Game over!");
         this.reset();
     }
      }; 
        
//};
//};
 
    Player.prototype.update = function() {
        //collision detection
        this.checkCollisions();
     //player wins
     if (this.y<=10) {
        console.log("You win sister!");
        this.reset();
     }
    
    };
      
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
Player.prototype.handleInput = function(direction){
    if(direction==='right'&&this.x<400) {
        this.x+=100;
    }
    if(direction==='left'&&this.x>0) {
        this.x-=100;
    }
    if(direction==='up'&&this.y>=20) {
        this.y-=60;
    }
    if(direction==='down'&&this.y<=350) {
        this.y+=85;
    }
    if (this.y<=5){
        this.x=200;
        this.y=430;
    }

    console.log("Player is " + this.x,this.y);

     };
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies


// Place the player object in a variable called player
var player = new Player(200,430); 

//allEnemies.forEach(checkCollisions(enemy)) {
    //if (player.x >= enemy.x + 6 && 
        //player.x < enemy.x + 36 &&
        //player.y >= enemy.y + 6 &&
        //player.y < enemy.y + 36);
   //{
          //console.log("Game over!");
         //player.reset();
      //}
     //}; 

 
  
 //player.checkCollisions();       
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});







