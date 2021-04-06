class Game{
    constructor(){}
    getState(){
        var gamestateref=dataBase.ref("gameState")
        gamestateref.on("value",function (data){
            gamestate=data.val();
        })
    }
    start(){
        if(gamestate===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
    }
    update(state){
        dataBase.ref("/").set({
            gameState:state
        })
    }
    play(){
        form.hide()
        textSize(30)
        text("Game Start",120,100)
        Player.getePlayeriInfo()
        for(var plr in playerall){
            var displayY=130
            displayY=displayY+20
            textSize(15)
            text(playerall[plr].name,120,displayY)
        }
    }
}