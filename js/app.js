// Enemies our player must avoid


var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;

    this.sprite = 'images/enemy-bug.png';
    this.update = function update (dt) {

    }
    x=-100;
    y=146;
    //move=200;

    this.render = function render (x,y) {
        return this.x, this.y, this.move;
    }
    this.handleInput = function handleInput () {

    }
     

    //set enemy position    
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks


Enemy.prototype.update = function(dt) {
    this.x = this.x + (this.move * dt);



    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function(x,y) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var enemy1= new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var allEnemies = [enemy1, enemy2,enemy3];

allEnemies.render;
allEnemies.update;



//function exampleClass(){
    //this.property1 = 5;
    //this.property2 = "World";
    //this.method1 = function method1 (arg1, arg2) {
        //return arg1=" "+this.property2;
    //}

    // Object declared using object literal
//var shape = {
   //height: 10,
   //width: 10,
   //area: function() {
      //return this.height * this.width;
   //}
//}
//console.log(shape.area());  // 100
// Object declared using constructor function
//function Shape() {
   //this.height = 10;
   //this.width = 10;
   //this.area = function() {
      //return this.height * this.width;
   //};
//};
//var shape = new Shape();
//console.log(shape.area());  // 100

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, sprite) {
    
    this.x = 500
    this.y = 100
    this.sprite = 'images/char-cat-girl.png';
    this.update = function update (dt) {


    }
    this.render = function render (x,y, sprite) {
        return this.x, this.y, this.sprite;
    }
    this.handleInput = function handleInput () {

    }
   };
   //function exampleClass(){
    //this.property1 = 5;
    //this.property2 = "World";
    //this.method1 = function method1 (arg1, arg2) {
        //return arg1=" "+this.property2;
    //}

    Player.prototype.update = function(dt) {

    this.x = this.x + (this.move * dt);
};

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

Player.prototype.render = function(x,y,sprite) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(20,60);
    



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
