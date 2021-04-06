var  dataBase,player,form,game;
var gamestate=0
var playerCount
var playerall

function setup(){
  createCanvas(400,400)
  dataBase=firebase.database()
  game=new Game()
  game.getState()
  game.start()
}
function draw(){
  if(playerCount===4){

    game.update(1)
  }
  if(gameState===1){
    game.play()
  }
}