
var Enemy = function(x,y, sprite,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    //this.speed=Math.floor((Math.random()*2));
    };

    Enemy.prototype.update = function(dt) {
       //makes it so if it goes off the canvas it reappears 
      
     if (this.x>=505) {
        //ask why it's not really random and they move pretty slowly
        this.x=Math.floor(Math.random()+(dt*85));
    }
    else this.x=this.x+Math.floor(Math.random(500)+(dt*85));
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
var enemy1= new Enemy(100,240,600);
var enemy2 = new Enemy(200,140,400);
var enemy3 = new Enemy(0,60,250);
var allEnemies = [enemy1,enemy2,enemy3];


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
            this.y=420;            
    };

    Player.prototype.checkCollisions = function () {
        //for (var i=0; i < allEnemies.length; i++){
            //determine rows enemy1,2,3 can be on

//if (this.x > enemy1.x + 101&&
   //this.x + 101 > enemy1.x &&
   //this.y < enemy1.y + 171 &&
   //171 + this.y > enemy1.y) {
    // collision detected!
   //} 
        
          if (this.x >= enemy3.x + 0 && 
        this.x < enemy3.x + 33 &&
        this.y >= enemy3.y + 0 &&
        this.y < enemy3.y + 2000) {
        
          console.log("Game over!");
         this.reset();
      };  
};
 
 
    Player.prototype.update = function() {
        //collision detection
        this.checkCollisions();
     //player wins
     if (this.y<=20) {
        console.log("You win sister!");
        this.reset();
     }
    //this.x*dt;
    //this.y*dt;
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
    if(direction==='up'&&this.y>=40) {
        this.y-=20;
    }
    if(direction==='down'&&this.y<=350) {
        this.y+=85;
    }
    if (this.y<=0){
        this.x=200;
        this.y=420;
    }

    console.log("Player is " + this.x,this.y);

     };


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(200,420); 
  
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

    player.handleInput(allowedKeys[e.keyCode])
});







