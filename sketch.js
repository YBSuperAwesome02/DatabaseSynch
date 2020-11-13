var database;
var position;
var gameState = 0
var playerCount, forn, game, player;

function setup(){
  
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game()
  game.getState()
  game.start()

}

function draw(){
  
  background("white");

}
