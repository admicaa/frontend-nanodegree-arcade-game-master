// Enemies our player must avoid


var Enemy = function(x,y, sprite, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    };

    Enemy.prototype.render = function() {
        return(sprite)
    };
    Enemy.prototype.update = function(dt) {
        this.speed=this.x*100;
      
     if (this.x>=505) {
        
        this.x=(Math.random)(100);
    }
    else this.x=this.x+Math.random(500);
     
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
var enemy1= new Enemy(100,146,200);
var enemy2 = new Enemy(300,246,205);
var enemy3 = new Enemy(200,346,208);
var allEnemies = [enemy1, enemy2,enemy3];


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y,sprite) {
    
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';

    };

    Player.prototype.update = function(dt) {

    this.x*dt;
    this.y*dt;
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
    if(direction==='up'&&this.y>=80) {
        this.y-=100;
    }
    if(direction==='down'&&this.y<=350) {
        this.y+=100;
    }
     };
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(200,420);   

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
