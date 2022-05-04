const btnRestart = document.getElementsByClassName("btn-game")[1]
btnRestart.disabled = true

var currentPlayer

function turnGame(snapshot) {
   var curPlayer;
    ref.child(roomCode).once("value", (snapshot) => {
        curPlayer = snapshot.val().currentPlayer;

        if(playerColor == curPlayer){
            btnDoneClass.disabled = false;
        }else{
            btnDoneClass.disabled = true;
        }
    });
    
}
