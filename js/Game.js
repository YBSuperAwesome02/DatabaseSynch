class Game{

constructor(){}
getState(){
    var gamestateref = database.ref("gameState")
    gamestateref.on("value", function(data){

        gameState = data.val()
        console.log(gameState)

    })
}

}