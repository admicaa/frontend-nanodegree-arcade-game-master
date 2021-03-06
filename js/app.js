
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
};

Enemy.prototype.update = function(dt) {
    //makes it so if it goes off the canvas it reappears 

    if (this.x >= 505) {
        this.x = -85;
    } else this.x = this.x + (this.speed * dt);

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
var enemy1 = new Enemy(100, 245, 400);
var enemy2 = new Enemy(200, 160, 300);
var enemy3 = new Enemy(0, 75, 205);
// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, sprite) {

    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.reset = function() {

    this.x = 200;
    this.y = 415;
};

Player.prototype.checkCollisions = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        //collision detector. only needs to check for x coordinate.
        if (this.x >= allEnemies[i].x + 6 &&
            this.x < allEnemies[i].x + 44 &&
            this.y === allEnemies[i].y) {
            console.log("Game over!");
            this.reset();
        }
    }
};


Player.prototype.update = function() {
    //collision detection
    this.checkCollisions();
    //player wins
    if (this.y <= 20) {
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
Player.prototype.handleInput = function(direction) {
    if (direction === 'right' && this.x < 400) {
        this.x += 100;
    }
    if (direction === 'left' && this.x > 0) {
        this.x -= 100;
    }
    if (direction === 'up' && this.y >= 20) {
        this.y -= 85;
    }
    if (direction === 'down' && this.y <= 350) {
        this.y += 85;
    }

};

// Now instantiate your objects.

// Place the player object in a variable called player
var player = new Player(200, 415);

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







