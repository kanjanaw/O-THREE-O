

function turnGame(snapshot) {
   let curPlayer;
    ref.child(roomCode).on("value", (snapshot) => {
        snapshot.forEach((data) => {
            curPlayer = snapshot.val().currentPlayer;
        })
        
        
        if(playerColor == curPlayer){
            btnDoneClass.disabled = false;
            playerNamesInGame[indexSetColor].style.opacity = 1;
        }else{
            btnDoneClass.disabled = true;
            playerNamesInGame[indexSetColor].style.opacity = .3;
        }
    });
    
}
