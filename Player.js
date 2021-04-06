class Player{
    constructor(){
        this.index=null;
        this.name=null;
    }
    getCount(){
        var playercountref=dataBase.ref("playerCount")
        playercountref.on("value",function (data){
            playerCount=data.val();
        })
    }
    updateCount(count){
        dataBase.ref("/").update({
            playerCount:count
        })
    }
    update(name){
        var playerIndex="players/player"+this.index
        dataBase.ref(playerIndex).set({
            name:this.name
        })
    }
    static getPlayerInfo(){
        var playerinforef=dataBase.ref("players")
        playerinforef.on("value",function (data){
            playerall=data.val();
        })
    }
}